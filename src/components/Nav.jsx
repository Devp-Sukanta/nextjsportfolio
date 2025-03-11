'use client'

import { useEffect, useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close sheet when pressing escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  // Prevent scrolling when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleScroll = (name) => {
    const obj = document.querySelector(name);

    if (obj) {
      obj.scrollIntoView({
        behavior: "smooth"
      })
    }

  }

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <nav className="sticky top-0 z-40 w-full bg-[#242424] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <a href="/" className="text-xl text-red-500 font-bold transition-transform duration-200 hover:scale-105 h-10 w-10">
              <img src="/logo.png" alt="" className="w-full h-full"/>
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 lg:hidden"
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-8">
            {menuItems.map((item) => (
              <p
                key={item.name}
                onClick={()=>handleScroll(item?.href)}
                className="cursor-pointer relative text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-red-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full"
              >
                {item.name}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:ml-6 lg:flex">
            <button className="rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sheet/Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
            onClick={() => setIsOpen(false)}
          />

          {/* Sheet */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-black p-6 shadow-lg animate-slideIn">
            <div className="flex items-center justify-between">
              <a href="/" className="text-xl font-bold transition-transform duration-200 hover:scale-105">
                Logo
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md p-2 text-gray-300 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:rotate-180 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="mt-8 flow-root">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="transform text-base font-medium text-gray-700 transition-all duration-200 hover:translate-x-2 hover:text-gray-900"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "slideInFromRight 0.5s ease forwards",
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile CTA Button */}
            <div className="mt-8 animate-fadeIn" style={{ animationDelay: "400ms" }}>
              <button className="w-full rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-600 hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}