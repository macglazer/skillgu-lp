import { Download } from '@/ui/icons/Download'
import { notFound } from 'next/navigation'
import { type ComponentType } from 'react'

export default async function StaticPage({
  params,
}: {
  readonly params: { filename: string }
}) {
  const Content = await import(`./${params.filename}.mdx`).then(
    (m: { default: ComponentType }) => m.default,
    () => notFound(),
  )

  const title = {
    policy: 'Polityka prywatności',
    terms: 'Regulamin',
  }

  console.log(params.filename)
  return (
    <article className="m-auto flex max-w-xl flex-col gap-10 px-5 py-[44px] text-primary md:max-w-fit lg:max-w-[1304px] lg:flex-row">
      <div>
        <h3 className="text-[28px] font-bold tracking-[-1px] lg:text-5xl lg:leading-[72px] lg:tracking-[-2px]">
          {params.filename === 'policy' || params.filename === 'terms'
            ? title[params.filename]
            : null}
        </h3>
        {params.filename === 'terms' ? (
          <a
            href="/terms.pdf"
            download
            className="link-primary-rounded mt-8 hidden w-60 items-center justify-between px-8 py-10px text-14px lg:flex"
          >
            <p className="leading-[25.2px]">Pobierz regulamin</p>
            <Download />
          </a>
        ) : null}
      </div>

      <Content />
    </article>
  )
}
