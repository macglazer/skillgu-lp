// 'use client'

import { sendMessage } from '@/services/sendMessage'
import { InputText } from '@/ui/InputText'
import { RadioField } from '@/ui/RadioField/RadioField'
import { notFound } from 'next/navigation'
import { useRef } from 'react'
import { useFormStatus } from 'react-dom'

export const ContactForm = ({
  createAndSendMessage,
}: {
  createAndSendMessage: (formData: FormData) => Promise<boolean>
}) => {
  const contactTypes = [
    { id: '1', contactType: 'error', label: 'Błędu strony' },
    { id: '2', contactType: 'suggestion', label: 'Sugestia poprawy czegoś' },
    { id: '3', contactType: 'collaboration', label: 'Propozycja współpracy' },
    { id: '4', contactType: 'other', label: 'Inne' },
  ]

  //const ref = useRef<HTMLFormElement>(null)

  const createAndSendMessagee = async (formData: FormData) => {
    'use server'

    try {
      const data = {
        email: formData.get('email') as string,
        name: formData.get('name') as string,
        message: formData.get('message') as string,
        contactType: formData.get('contactType') as
          | 'error'
          | 'suggestion'
          | 'collaboration'
          | 'other',
      }
      const response = await sendMessage(data)

      formData.set('email', '')
    } catch (err) {
      return notFound()
    }
  }

  return (
    <form action={createAndSendMessagee}>
      <div className="mb-6 flex w-full flex-col gap-8 md:flex-row">
        <InputText label="Twój e-mail" name="email" type="email" required />
        <InputText label="Twoje imię" name="name" required />
      </div>
      <div className="mb-8 w-full">
        <p className="mb-3 block text-14px font-semibold leading-6">
          Kontaktuję się w sprawie...
        </p>
        <div className="flex flex-col gap-6 md:flex-row">
          {contactTypes.map(({ id, label, contactType }) => (
            <RadioField
              key={id}
              label={label}
              name="contactType"
              value={contactType}
            />
          ))}
        </div>
      </div>
      <div className="mb-8">
        <InputText tag="textarea" label="Wiadomość" name="message" required />
      </div>
      <button
        type="submit"
        className="link-primary-rounded w-full px-8 py-3 text-base"
      >
        Wyślij wiadomość
      </button>
    </form>
  )
}
