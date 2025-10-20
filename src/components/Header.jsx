'use client'
import React, { useState } from 'react'
import '../styles/style.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { Menu, X } from 'lucide-react' // lucide-react icons (preinstalled in Next.js + shadcn)

import logo from '../assets/logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="flex items-center justify-between text-white">
        {/* Logo */}
        <div className="logo flex items-center gap-2">
          <Image src={logo} alt="logo" width={163} height={28} priority />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[16px]">
          <li className="hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/about">Services</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/services">Pricing</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/contact">About</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/contact">Blog</Link>
          </li>
        </ul>

        {/* Contact Button (Desktop Only) */}
        <div className="hidden md:block">
          <Button theme="primary" size="md">
            Contact
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4  rounded-lg text-white">
          <ul className="flex flex-col gap-4 text-[16px]">
            <li className="hover:text-gray-300">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
             <li className="hover:text-gray-300">
              <Link href="#" onClick={() => setMenuOpen(false)}>Services</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="#" onClick={() => setMenuOpen(false)}>Pricing</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="#" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="#" onClick={() => setMenuOpen(false)}>Blog</Link>
            </li>
          </ul>

          <div className="mt-4 max-w-fit">
            <Button theme="primary" size="md">
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
