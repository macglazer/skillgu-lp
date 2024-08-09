import { ReactNode } from 'react'
import Link from 'next/link'

import { Close } from '@/ui/icons/Close'

import { Paths } from '@/app/paths'

export const ModalTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center bg-black/60">
      <div className="m-5 flex max-w-[600px] flex-col items-end gap-4 rounded-[20px] border border-base400 bg-base000 px-8 pb-14 pt-8">
        <Link
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-base400 bg-base200 text-right"
          href={Paths.HOME}
          aria-label="close modal"
          scroll={false}
        >
          <Close />
        </Link>
        {children}
      </div>
    </div>
  )
}
