'use client';

import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="bg-background sticky top-0 z-50 border-b shadow-md">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center text-lg font-semibold">
          <img
            src="/cyon_logo.png"
            alt="CYON Connect Logo"
            className="h-8 w-auto mr-2"
          />
          CYON Connect
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/events" className="hover:text-primary">
            Events
          </Link>
          <Link href="/resources" className="hover:text-primary">
            Resources
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Theme Toggle Button */}
        <div className="flex items-center space-x-4">
          <Button size="icon" variant="ghost" onClick={toggleTheme}>
            {mounted && (theme === 'light' ? <Moon /> : <Sun />)}
            <span className="sr-only">Toggle theme</span>
          </Button>
          {/* Mobile Menu (Example - Implement your own) */}
          <div className="md:hidden">
            {/* Add your mobile menu icon and logic here */}
            {/* Example: Hamburger icon that toggles a mobile menu */}
            <button className="text-gray-500 hover:text-primary focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
