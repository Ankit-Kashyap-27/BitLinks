import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-14 bg-purple-700 flex justify-between items-center text-white px-3 '>
            <div className='logo font-bold text-2xl '>
                <Link href={"/"}>BitLinks</Link>
            </div>
            <ul className='flex justify-center items-center gap-4'>

                <Link href="/"> <li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>
                <li className='flex gap-3'>
                    <Link href="/shorten"><button className='bg-purple-500 shadow-lg py-1 p-3 font-bold rounded-lg' >Try Now</button></Link>
                    <Link href="/github"><button className='bg-purple-500 shadow-lg py-1 p-3 font-bold rounded-lg'>GitHub</button></Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar
