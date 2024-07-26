'use client'

import { useState } from 'react'
import Link from 'next/link'

import { MobileMenuButton } from './MobileMenuButton/MobileMenuButton'
import { Navigation } from './Navigation'
import Logo from '@/app/ui/icons/Logo'

export const Topbar = () => {
  const [isShown, setIsShown] = useState(false)
  return (
    <div className="fixed left-0 right-0 top-0 m-auto flex max-w-[1304px] items-center justify-between border-b border-base200 bg-base000 px-5 py-4">
      <Link
        className="flex items-center justify-center"
        href=""
        aria-label="Go to Home Page"
      >
        <Logo />
      </Link>
      <Navigation className="hidden lg:flex" />
      {isShown ? (
        <div className="fixed bottom-0 left-0 right-0 top-16 border-t border-base200 bg-base000 px-5 py-6 lg:hidden">
          <Navigation className="h-full" onClick={() => setIsShown(false)} />
        </div>
      ) : null}
      <MobileMenuButton onClick={() => setIsShown((state) => !state)} />
    </div>
  )
}
