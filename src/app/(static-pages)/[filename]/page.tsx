import { type ComponentType } from 'react'
import { notFound } from 'next/navigation'

import { Download } from '@/ui/icons/Download'

export default async function StaticPage({
  params,
}: {
  readonly params: { filename: string }
}) {
  const Content = await import(`./${params.filename}.mdx`).then(
    (m: { default: ComponentType }) => m.default,
    () => notFound(),
  )

  const pages = {
    policy: {
      title: 'Polityka prywatności',
      path: '/terms.pdf',
    },
    terms: { title: 'Regulamin', path: '/terms.pdf' },
  }

  if (params.filename !== 'policy' && params.filename !== 'terms') return
  
  return (
    <article className="m-auto flex max-w-xl flex-col gap-10 px-5 py-[44px] text-primary md:max-w-fit lg:max-w-[1304px] lg:flex-row">
      <div>
        <h3 className="text-[28px] font-bold tracking-[-1px] lg:text-5xl lg:leading-[72px] lg:tracking-[-2px]">
          {pages[params.filename].title}
        </h3>
        <a
          href={pages[params.filename].path}
          download
          className="link-primary-rounded mt-8 hidden w-fit items-center justify-between px-10 py-10px text-14px lg:flex lg:gap-4"
        >
          <p className="leading-[25.2px]">Pobierz</p>
          <Download />
        </a>
      </div>

      <Content />
    </article>
  )
}
