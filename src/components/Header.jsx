'use client'
import React, { useState, useEffect } from 'react'
import '../styles/style.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { Menu, X } from 'lucide-react' 
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !(event.target ).closest('.mobile-menu')) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blogs' },
  ]

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <header 
      className={`header bg-gradient-to-br from-gray-900 to-blue-900 transition-all duration-300 `}>
      <div className=" ">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div  className="flex items-center gap-2">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image 
                src={logo} 
                alt="WealthWise Logo" 
                width={180} 
                height={35} 
                priority 
                className={`transition-all duration-300 ${
                  scrolled ? 'brightness-0' : 'brightness-0 invert'
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`relative font-medium text-lg transition-colors duration-300 hover:text-amber-500 ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 hover:w-full"></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button 
                theme={scrolled ? "warning" : "primary"} 
                size="md"
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu lg:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className={`py-1 border-t ${
                scrolled ? 'border-gray-200' : 'border-white/20'
              }`}>
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial="closed"
                      animate="open"
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block py-3 px-4 rounded-xl font-medium text-lg transition-all duration-300 hover:bg-amber-500 hover:text-white ${
                          scrolled ? 'text-gray-700' : 'text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <Link
                    href="/contact"
                    className="pt-4"
                  >
                    <Button 
                      theme={scrolled ? "warning" : "primary"} 
                      size="md"
                      className="w-full justify-center "
                      onClick={() => setMenuOpen(false)}
                    >
                      Contact
                    </Button>
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header