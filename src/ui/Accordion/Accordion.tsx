'use client'

import clx from 'classnames'
import { useState } from 'react'
import { Chevron } from '../icons/Chevron'

type AccordionPropType = {
  data: { id: string; title: string; description: string }[]
  className?: string
}
export const Accordion = ({ data, className }: AccordionPropType) => {
  const [accordion, setAccordion] = useState(
    data.map((item) => ({ ...item, isOpen: false })),
  )

  const toggleAccordion = (id: string) => {
    const updatedAccordion = accordion.map((item) => {
      if (item.id === id) {
        return { ...item, isOpen: !item.isOpen }
      } else {
        return { ...item, isOpen: false }
      }
    })

    setAccordion(updatedAccordion)
  }
  return (
    <div className={clx('flex flex-col gap-3', className)}>
      {accordion.map(({ id, isOpen, title, description }) => (
        <div key={id} className="border-b border-base200">
          <button
            className="flex w-full items-center justify-between p-5 transition"
            onClick={() => toggleAccordion(id)}
          >
            <p className="text-14px font-semibold leading-6">{title}</p>
            <Chevron
              className={`transform ${
                isOpen ? 'rotate-180' : 'rotate-0'
              } transition-transform duration-200`}
            />
          </button>
          {isOpen && (
            <div className="px-5 py-3 text-14px font-medium leading-6 text-base600 lg:p-5">
              {description}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
