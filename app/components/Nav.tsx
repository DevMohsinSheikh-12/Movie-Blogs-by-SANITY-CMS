'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { ModeToggle } from './Modetoggle'
import { List, X } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import Link from 'next/link'


const navigation = [
  { name: 'Product', href: '/' },
  { name: 'Features', href: '/' },
  { name: 'Marketplace', href: '/' },
  { name: 'Company', href: '/' },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

    <header className="absolute inset-x-0 top-0 z-50">
    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <Link  href="/" className="-m-1.5 p-1.5">
          <span className=" font-bold font-mono ">Movie Blogs</span>
          
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center transition-all justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <List size={24}  weight="light" aria-hidden="true" className='dark:text-slate-300' />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12 ">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-sm/6 font-semibold dark:text-slate-300">
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
        <ModeToggle />
        <Link href="/" className="text-sm/6 font-semibold text-gray-900 dark:text-slate-300">
          Log in <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </nav>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden ">
      <div className="fixed  inset-0 z-50" />
      <DialogPanel className="fixed transition-all inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/">
          <span className=" font-bold font-mono ">Movie Blogs</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 transition-all text-gray-700 "
          >
            <span className="sr-only">Close menu</span>
            <X size={24}  weight="light" aria-hidden="true" className='dark:text-slate-300'  />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-slate-300  hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
                <ModeToggle />
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 dark:text-slate-300 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  
  )
}
