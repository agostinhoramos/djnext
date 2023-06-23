import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { useContext } from 'react';
import AuthContext from '@/context/AuthContext'

const Index = () => {

  const { isLoggedIn, userData, logout } = useContext(AuthContext)
  

  return (
    <>
      <Head>
        <title>DjNext - Welcome</title>
        <meta name="description" content="DjNext" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/client/src/pages/index.jsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          
          { isLoggedIn ?
            <div className="cursor-pointer flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-2xl" >
              <div className='font-semibold' onClick={()=>{logout()}} >{ `Hey, ${userData?.first_name}` }</div>
            </div>
          :
            <Link
              className="cursor-pointer flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-2xl hover:underline"
              href={"/login"}
            >
              <div className='font-semibold' >Login</div>
            </Link>
          }
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:opacity-50 after:dark:from-sky-900 after:dark:via-[#0141ff] after:opacity-90 before:lg:h-[360px]">
        <div className='text-9xl'><div className='inline font-bold text-green-700'>Dj</div>Next</div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="https://github.com/agostinhoramos/djnext#readme"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Readme{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about DjNext features and API.
          </p>
        </Link>

        <Link
          href="/technologies"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Used technologies{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          By itself, Next.js offers great options for writing lambda functions to power the backend of your application
          </p>
        </Link>

        <Link
          href="/dn-admin"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Admin Panel{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          An admin panel enables administrators of a website to manage its configurations, settings, content, and features.
          </p>
        </Link>
      </div>
    </main>
    </>
  )
}

export default Index;