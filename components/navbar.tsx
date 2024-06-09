import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { ModeToggle } from './dark-mode-button'

type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-white/40 dark:bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <span className="text-3xl font-bold">HyTech</span>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#" className='group hover:group'>Products
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>            </Link>
          </li>
          <li>
            <Link href="#" className='group'>Pricing
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className='group'>Clients
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className='group'>Resources
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className='group'>Documentation
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className='group'>Enterprise
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <div className="z-[100]">
          <ModeToggle />
        </div>
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  )
}

export default Navbar
