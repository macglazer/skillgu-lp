import { notFound } from 'next/navigation'

import { ContactForm } from '../_components/contact'
import { sendMessage } from '@/services/sendMessage'

export default async function Contact() {
  const createAndSendMessage = async (formData: FormData) => {
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
      return await sendMessage(data)
    } catch (err) {
      return notFound()
    }
  }

  return (
    <section className="m-auto flex w-full flex-col gap-10 p-[44px] px-5 lg:max-w-[1304px] lg:flex-row lg:justify-between">
      <h3 className="text-[28px] font-semibold tracking-[-2px] md:min-w-80 lg:text-48px">
        Kontakt
      </h3>
      <div className="w-full max-w-screen-md">
        <ContactForm createAndSendMessage={createAndSendMessage} />
      </div>
    </section>
  )
}
