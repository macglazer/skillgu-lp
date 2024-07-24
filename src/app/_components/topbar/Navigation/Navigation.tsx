import Link from 'next/link'
import clx from 'classnames'
import { MouseEventHandler } from 'react'

const navLinks = [
  { name: 'Strona główna', id: 'home', href: '#home' },
  { name: 'O nas', id: 'about', href: '#about' },
  { name: 'Lista mentorów', id: 'mentors', href: '#mentors' },
  { name: 'FAQ', id: 'faq', href: '#faq' },
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
        'flex gap-8 justify-between flex-col lg:flex-row',
        className,
      )}
    >
      <ul className="flex gap-6 items-start flex-col lg:flex-row lg:items-center">
        {navLinks.map(item => (
          <li key={item.id} onClick={onClick}>
            <Link
              className="text-14px font-medium text-base800"
              href={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 flex-col lg:flex-row">
        <Link
          href=""
          className="rounded-full text-14px py-10px px-4 text-center font-semibold bg-secondaryLight text-secondary"
        >
          Zostań Mentorem
        </Link>
        <Link
          href=""
          className="rounded-full text-14px py-10px px-8 text-center font-semibold bg-secondary text-base000"
        >
          Zaloguj się
        </Link>
      </div>
    </nav>
  )
}
