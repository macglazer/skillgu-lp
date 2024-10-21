'use client'

import { useRef, useState } from 'react'

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
  const [isModalShown, setIsModalShown] = useState<boolean>(false)
  const contactTypes = [
    { id: '1', contactType: 'error', label: 'Błędu strony' },
    { id: '2', contactType: 'suggestion', label: 'Sugestia poprawy czegoś' },
    { id: '3', contactType: 'collaboration', label: 'Propozycja współpracy' },
    { id: '4', contactType: 'other', label: 'Inne' },
  ]

  const ref = useRef<HTMLFormElement>(null)

  const submitAction = async (formData: FormData) => {
    const response = await createAndSendMessage(formData)
    if (response.isSuccess) {
      setIsModalShown(true)
      return ref.current?.reset()
    }
  }

  return (
    <div className="relative">
     {true&& <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 bg-base000/80"><div className="max-w-92 border bg-white px-8 pt-2 pb-8 rounded-2xl p"><button className="w-6 h-6 border border-base400 rounded-lg bg-base200/50" onClick={()=>setIsModalShown(false)}>X</button>
        <p className="font-medium font-semibold mb-2">Wiadomośc została wysłana</p>
        <p className="text-base800 text-sm font-medium ">Powinieneś dostać odpowiedź w przeciągu najbliższych kilku dni. </p>
        <button className="link-secondary-rounded text-sm px-3 py-2">Przejdź do strony głównej 
          </button></div></div>}
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
