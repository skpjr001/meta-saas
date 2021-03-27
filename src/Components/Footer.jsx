import React from 'react'
import Link from 'next/link'

export default function Footer({position}) {
  return (
    <div className={`${position} bottom-0 p-4 w-screen flex items-center justify-between  bg-gray-100`}>
      <div className="flex text-sm sm:text-base font-medium sm:font-semibold text-gray-700 ">
        <Link href="/about"><a><h1 className="pr-3 hover:text-gray-400 cursor-pointer">About</h1></a></Link>
        <Link href="/policy"><a><h1 className="pl-3 pr-3 hover:text-gray-400 cursor-pointer">Privacy Policy</h1></a></Link>
      </div>
      <div className=" pr-3 text-sm sm:text-base font-medium sm:font-semibold text-gray-700 hover:text-gray-400 cursor-pointer">
        <Link href="/"><a><h1>Desinged By: Pal Labs</h1></a></Link>
      </div>
    </div>
  )
}
