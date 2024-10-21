'use client'

import { useEffect, useRef, useState } from 'react'

import { InputText } from '@/ui/InputText'
import { RadioField } from '@/ui/RadioField/RadioField'
import { Close } from '@/ui/icons/Close'

export const ContactForm = ({
  createAndSendMessage,
}: {
  createAndSendMessage: (formData: FormData) => Promise<{
    isSuccess: boolean
    message?: string
  }>
}) => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const contactTypes = [
    { id: '1', contactType: 'error', label: 'Błędu strony' },
    { id: '2', contactType: 'suggestion', label: 'Sugestia poprawy czegoś' },
    { id: '3', contactType: 'collaboration', label: 'Propozycja współpracy' },
    { id: '4', contactType: 'other', label: 'Inne' },
  ]

  const ref = useRef<HTMLFormElement>(null)

  const submitAction = async (formData: FormData) => {
    setIsModalShown(true)
    const response = await createAndSendMessage(formData)
    if (response.isSuccess) {
      return ref.current?.reset()
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    if (isModalShown) {
      const timer = setTimeout(() => {
        setIsModalShown(false)
        setError(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isModalShown])

  return (
    <div className="relative">
      {isModalShown && (
        <div className="absolute bottom-0 left-[-5px] right-0 top-0 flex items-center justify-center bg-base000/90">
          <div className="w-full max-w-96 rounded-2xl border bg-white px-8 pb-8 pt-4 shadow-sm">
            <div className="flex justify-end">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-md border border-base400 bg-base200"
                onClick={() => setIsModalShown(false)}
              >
                <Close />
              </button>
            </div>

            <p className="my-3 text-xl font-semibold">
              {error
                ? 'Wystąpił błąd w czasie wysyłania wiadomości'
                : 'Wiadomośc została wysłana'}
            </p>
            <p className="text-sm font-medium leading-5 text-base800">
              {error
                ? 'Spróbuj ponownie za kilka minut.'
                : 'Powinieneś dostać odpowiedź w przeciągu najbliższych kilku dni'}
            </p>
          </div>
        </div>
      )}
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
    </div>
  )
}
