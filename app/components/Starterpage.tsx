import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

function Starterpage() {
  return (
    <>
    {/* Hello world */}
    {/* Hero */}
    <div className="relative mt-12 overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <Link 
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
            href="#"
          >
            Explore the Capital Product
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">
                Explore
              </span>
              <CaretRight size={13} color='#2563EB' />
            </span>
          </Link>
        </div>
        {/* End Announcement Banner */}
        {/* Title */}
        <div className="mt-5  max-w-xl text-center mx-auto">
          <h1 className="big-text-gradient pb-3 block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
          Explore Stories That Inspire Change        </h1>
        </div>
        {/* End Title */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-neutral-400">
            Preline is a large open-source project, crafted with Tailwind CSS
            framework by Hmlstream.
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
          <Link 
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4"
            href="#Herosec"
          >
            Explore Now
          <CaretRight size={14} color='white' />
          </Link>
        </div>
        {/* End Buttons */}
      </div>
    </div>
    {/* End Hero */}
  </>
  )
}

export default Starterpage