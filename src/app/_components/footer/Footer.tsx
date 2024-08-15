import Link from 'next/link'

import { Navigation } from './Navigation'
import { Logo } from '@/ui/icons/Logo'
import { Facebook } from '@/ui/icons/Facebook'
import { Linkedin } from '@/ui/icons/Linkedin'
import { Instagram } from '@/ui/icons/Instagram'
import { Youtube } from '@/ui/icons/Youtube'

import { Paths } from '@/app/paths'

export const Footer = () => {
  return (
    <footer className="m-auto flex w-full max-w-[1304px] flex-col gap-6 px-5 pb-10 pt-12 md:gap-[72px] lg:pt-88px">
      <div className="flex flex-col justify-between gap-6 md:flex-row">
        <div className="flex max-w-96 flex-col gap-[25px] pr-5">
          <Logo />
          <p className="text-14px font-medium leading-[25px] text-base600">
            Skillgu to miejsce, gdzie możesz znaleźć swojego następnego mentora.
          </p>
        </div>
        <Navigation />
      </div>
      <div className="flex flex-col justify-between gap-6 md:flex-row-reverse">
        <ul className="flex gap-5">
          <li>
            <Link href={Paths.FACEBOOK} target="_blank" aria-label="facebook">
              <Facebook />
            </Link>
          </li>
          <li>
            <Link href={Paths.LINKEDIN} target="_blank" aria-label="linkedin">
              <Linkedin />
            </Link>
          </li>
          <li>
            <Link href={Paths.INSTAGRAM} target="_blank" aria-label="instagram">
              <Instagram />
            </Link>
          </li>
          <li>
            <Link href={Paths.YOUTUBE} target="_blank" aria-label="youtube">
              <Youtube />
            </Link>
          </li>
        </ul>
        <p className="text-14px font-medium text-base600">
          © 2024 Skillgu. All rights reserved
        </p>
      </div>
    </footer>
  )
}
