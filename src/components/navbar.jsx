import React from 'react'
import Link from 'next/link'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
const Navbar = () => {
    return (
        <div className='flex justify-center max-h-screen gap-6  text-center'>
            {/* Show the sign-in and sign-up buttons when the user is signed out */}
            <button className=" text-2xl font-bold text-black cursor-pointer">
                <Link href="/home">home</Link>
            </button>
            <button className=" text-2xl font-bold text-black cursor-pointer">
                <Link href="/contact">Contact</Link>
            </button>
            <SignedOut>
                <SignInButton >
                    <button className=" text-2xl font-bold text-black cursor-pointer">
                        SignIn
                    </button>
                </SignInButton>
                <SignUpButton>
                    <button className=" text-2xl font-bold text-black cursor-pointer">
                        SignUp
                    </button>
                </SignUpButton>
            </SignedOut>
            {/* Show the user button when the user is signed in */}
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default Navbar
