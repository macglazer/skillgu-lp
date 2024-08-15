import { Route } from 'next'
import Link from 'next/link'
import { MouseEventHandler } from 'react'
import clx from 'classnames'

import { Paths } from '@/app/paths'

const navLinks = [
  { name: 'Strona główna', id: 'home', href: Paths.HOME },
  { name: 'O nas', id: 'about', href: Paths.ABOUT },
  { name: 'Lista mentorów', id: 'mentors', href: Paths.MENTORS },
  { name: 'Blog', id: 'blog', href: Paths.BLOG },
  { name: 'FAQ', id: 'faq', href: Paths.FAQ },
]

export const Navigation = ({
  className,
  onClick,
}: {
  className?: string
  onClick?: MouseEventHandler<HTMLLIElement>
}) => {
  return (
    <nav
      className={clx(
        'flex flex-col justify-between gap-8 lg:flex-row',
        className,
      )}
    >
      <ul className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
        {navLinks.map((item) => (
          <li key={item.id} onClick={onClick}>
            <Link
              className="text-14px font-medium text-base800"
              href={item.href as Route}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 lg:flex-row">
        <Link
          href={Paths.REGISTER}
          className="rounded-full bg-secondaryLight px-4 py-10px text-center text-14px font-semibold text-secondary"
        >
          Zostań Mentorem
        </Link>
        <Link
          href={Paths.LOGIN}
          className="link-primary-rounded px-8 py-10px text-14px"
        >
          Zaloguj się
        </Link>
      </div>
    </nav>
  )
}
