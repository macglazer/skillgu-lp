import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export type ContactFormType = {
    email: string
    name: string
    message: string
    contactType: 'error' | 'suggestion' | 'collaboration' | 'other'
}
export const sendMessage = async ({
                                      email,
                                      name,
                                      message,
                                      contactType,
                                  }: ContactFormType): Promise<{ isSuccess: boolean; message?: string }> => {
    try {
        await axios.post('/api/contact/send', {
            email,
            name,
            message,
            contactType,
        });

        await new Promise((resolve) => setTimeout(resolve, 500))
        return {
            isSuccess: true,
        }
    } catch (error) {
        console.error('Error sending message:', error)
        return {
            isSuccess: false,
            message: 'Error sending message',
        }
    }
}

