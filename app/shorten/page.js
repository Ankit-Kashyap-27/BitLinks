"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                console.log(result)
                alert(result.message)
                seturl("")
                setshorturl("")
            })
            .catch((error) => console.error(error));

    }

    return (

        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>generate your short URLs</h1>
            <div className='flex flex-col gap-2 '>
                <input className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    type="text" placeholder='Enter your URL'
                    onChange={e => { seturl(e.target.value) }}
                    value={url} />

                <input className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    type="text" placeholder='Enter your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }}
                    value={shorturl} />
                <button className=' text-white bg-purple-500 shadow-lg py-1 p-3 my-3 font-bold rounded-lg'
                    onClick={generate}
                >Generate</button>
            </div>
            {generated && <> <span className='font-bold text-lg'>Your link </span><code><Link target="_blank" href={generated}>{generated}</Link></code>
            </>}    
        </div>
    )
}

export default Shorten
