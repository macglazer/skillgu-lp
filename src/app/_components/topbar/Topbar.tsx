'use client'

import { useState } from 'react'
import Link from 'next/link'

import { MobileMenuButton } from './MobileMenuButton/MobileMenuButton'
import { Navigation } from './Navigation'
import Logo from '@/app/ui/icons/Logo'

export const Topbar = () => {
  const [isShown, setIsShown] = useState(false)
  return (
    <div className="border-b border-base200 fixed top-0 left-0 right-0 bg-base000 py-4 px-5 m-auto flex justify-between items-center max-w-[1264px] lg:py-5">
      <Link className="flex justify-center items-center" href="">
        <Logo />
      </Link>
      <Navigation className="hidden lg:flex" />
      {isShown ? (
        <div className="fixed top-16 bottom-0 left-0 right-0 border-t border-base200  bg-base000 px-5 py-6 lg:hidden">
          <Navigation className="h-full" onClick={() => setIsShown(false)} />
        </div>
      ) : null}
      <MobileMenuButton onClick={() => setIsShown(state => !state)} />
    </div>
  )
}
