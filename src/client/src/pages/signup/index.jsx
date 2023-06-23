import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import AuthContext from '@/context/AuthContext'
import { useContext, useEffect, useState } from 'react';

const SignUp = () => {

    const { authWith, login } = useContext(AuthContext)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        login({
            username: username,
            password: password
        })
    }

    return (
        <>
            <Head>
                <title>DjNext - Sign Up</title>
                <meta name="description" content="DjNext" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Link href="/" >
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://static.djangoproject.com/img/icon-touch.e4872c4da341.png"
                            alt="Your Company"
                        />
                    </Link>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form className="space-y-6" onSubmit={handleFormSubmit} >
                            
                        <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    First Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Last Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        autoComplete="current-password"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Repeat Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        autoComplete="current-password"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                                    />
                                </div>
                            </div>


                            <div className='flex'>
                                <Link
                                    href="/login"
                                    className="flex w-full justify-center rounded-md border border-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm mr-1"
                                >
                                    Sign in
                                </Link>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ml-1"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>

                        <div>
                            <div className="relative mt-10">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-200" />
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div
                                    onClick={() => { authWith('google') }}
                                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#aa2a2a] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer focus-visible:outline-[#aa2a2a]"
                                >
                                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 50 50">
                                        <path
                                            fillRule="evenodd"
                                            d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z" clipRule="evenodd" />

                                    </svg>
                                    <span className="text-sm font-semibold leading-6">Google</span>
                                </div>

                                <div
                                    onClick={() => { authWith('facebook') }}
                                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1f62b5] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer focus-visible:outline-[#1f62b5]"
                                >
                                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 50 50">
                                        <path
                                            fillRule="evenodd"
                                            d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm font-semibold leading-6">Facebook</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;