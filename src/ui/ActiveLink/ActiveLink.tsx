'use client'

import Link, { type LinkProps } from 'next/link'
import { useSearchParams } from 'next/navigation'
import { type Route } from 'next'
import clx from 'classnames'

type ActiveLinkProps<T extends string> = {
  href: Route<T>
  children: React.ReactNode
  initCategory: string
  activeClassName: string
  className: string
} & Omit<LinkProps<T>, 'href'>

export const ActiveLink = <T extends string>({
  href,
  children,
  initCategory,
  activeClassName,
  className,
  ...props
}: ActiveLinkProps<T>) => {
  const searchParams = useSearchParams()
  const isActive = searchParams.get('cat')
    ? href === `/?cat=${searchParams.get('cat')}`
    : href === `/?cat=${initCategory}`

  return (
    <Link
      scroll={false}
      href={href}
      className={clx(
        isActive ? activeClassName : className,
        'rounded-full px-8 py-2 text-center text-xs font-semibold lg:min-w-32 lg:py-[10px] lg:text-14px',
      )}
      aria-current={isActive ? 'page' : undefined}
      {...props}
    >
      {children}
    </Link>
  )
}
