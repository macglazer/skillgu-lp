import Link from 'next/link'
import { Route } from 'next'
import clx from 'classnames'

import { Paths } from '@/app/paths'

const navLinks = [
  { name: 'O nas', id: 'about', href: Paths.ABOUT },
  { name: 'FAQ', id: 'faq', href: Paths.FAQ },
  { name: 'Polityka prywatności', id: 'policy', href: Paths.POLICY },
  { name: 'Regulamin', id: 'terms', href: Paths.TERMS },
  { name: 'Kontakt', id: 'contact', href: Paths.CONTACT },
  { name: 'Cennik', id: 'pricing', href: Paths.PRICING },

]

export const Navigation = ({ className }: { className?: string }) => {
  return (
    <nav
      className={clx(
        'mr-5 flex w-60 max-w-full flex-col gap-4 lg:gap-6',
        className,
      )}
    >
      <p className="text-base font-semibold text-primary lg:text-lg">Linki</p>
      <ul className="flex flex-col gap-3 lg:gap-5">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link
              className="text-xs font-medium text-base600 lg:text-14px"
              href={item.href as Route}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
