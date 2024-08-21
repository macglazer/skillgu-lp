'use client'

import { useRef } from 'react'

import { InputText } from '@/ui/InputText'
import { RadioField } from '@/ui/RadioField/RadioField'

export const ContactForm = ({
  createAndSendMessage,
}: {
  createAndSendMessage: (formData: FormData) => Promise<{
    isSuccess: boolean
    message?: string
  }>
}) => {
  const contactTypes = [
    { id: '1', contactType: 'error', label: 'Błędu strony' },
    { id: '2', contactType: 'suggestion', label: 'Sugestia poprawy czegoś' },
    { id: '3', contactType: 'collaboration', label: 'Propozycja współpracy' },
    { id: '4', contactType: 'other', label: 'Inne' },
  ]

  const ref = useRef<HTMLFormElement>(null)

  const submitAction = async (formData: FormData) => {
    const response = await createAndSendMessage(formData)
    if (response.isSuccess) ref.current?.reset()
  }

  return (
    <form ref={ref} action={submitAction}>
      <div className="mb-6 flex w-full flex-col gap-8 md:flex-row">
        <InputText
          label="Twój e-mail"
          name="email"
          type="email"
          placeholder="np: jankowalski@skullgu.com"
          required
        />
        <InputText
          label="Twoje imię"
          name="name"
          placeholder="np: Jan Kowalski"
          required
        />
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
        <InputText
          tag="textarea"
          label="Wiadomość"
          name="message"
          placeholder="Treść wiadomości"
          required
        />
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
