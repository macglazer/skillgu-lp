import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

const faqList: {
  id: string
  title: string
  description: string
}[] = [
  {
    id: '01',
    title: 'Jak mogę założyć konto jako mentor?',
    description:
        'Aby założyć konto jako mentor, kliknij przycisk „Zarejestruj się” w prawym górnym rogu strony głównej, a następnie wybierz opcję „Zostań mentorem”. Wypełnij formularz swoimi danymi oraz informacjami o swoim doświadczeniu. Po zakończeniu procesu rejestracji Twoje konto zostanie zweryfikowane przez nasz zespół.',
  },
  {
    id: '02',
    title: 'Jak mogę znaleźć mentora odpowiadającego moim potrzebom?',
    description:
        'Aby znaleźć mentora, skorzystaj z naszej wyszukiwarki dostępnej na stronie głównej. Możesz filtrować mentorów według branży, doświadczenia, ocen oraz dostępności. Po znalezieniu odpowiedniego mentora możesz umówić się na pierwszą sesję.',
  },
  {
    id: '03',
    title: 'Jak przebiega proces umawiania się na sesję mentoringową?',
    description:
        'Po wybraniu mentora możesz umówić się na sesję poprzez kalendarz dostępny na jego profilu. Wybierz dogodny termin, a następnie potwierdź swoją rezerwację. Otrzymasz potwierdzenie e-mailowe z danymi dotyczącymi sesji.',
  },
  {
    id: '04',
    title: 'Jakie są koszty korzystania z usług mentorów?',
    description:
        'Koszty sesji z mentorami zależą od ich doświadczenia oraz długości trwania sesji. Szczegółowe informacje o cenach znajdziesz na profilu każdego mentora. Płatności dokonuje się z góry za pomocą bezpiecznego systemu płatności dostępnego na naszej platformie.',
  },
  {
    id: '05',
    title: 'Czy mogę zmienić swojego mentora?',
    description:
        'Tak, możesz zmienić mentora w każdej chwili. Jeśli po kilku sesjach stwierdzisz, że inny mentor lepiej odpowiada Twoim potrzebom, możesz przejść do jego profilu i umówić się na sesję. Wszelkie opłaty za niewykorzystane sesje z poprzednim mentorem mogą zostać przeniesione na nowego mentora, jeśli zostały wcześniej uzgodnione.',
  },
  {
    id: '06',
    title: 'Jak mogę zrezygnować z subskrypcji lub usunąć konto?',
    description:
        'Aby zrezygnować z subskrypcji lub usunąć konto, przejdź do sekcji „Ustawienia konta” i wybierz odpowiednią opcję. Po potwierdzeniu rezygnacji Twoje konto zostanie dezaktywowane, a wszystkie dane usunięte zgodnie z naszą polityką prywatności.',
  },
  {
    id: '07',
    title: 'Czy mogę mieć więcej niż jednego mentora?',
    description:
        'Tak, możesz współpracować z wieloma mentorami jednocześnie, szczególnie jeśli chcesz rozwijać się w różnych obszarach. Każdy mentor ma swoje unikalne umiejętności, które mogą przyczynić się do Twojego rozwoju zawodowego i osobistego.',
  },
  {
    id: '08',
    title: 'Jak mogę ocenić mojego mentora po zakończeniu sesji?',
    description:
        'Po zakończeniu sesji otrzymasz możliwość oceny mentora. Twoja opinia jest dla nas bardzo ważna i pomoże innym użytkownikom w wyborze odpowiedniego mentora. Ocenę możesz wystawić bezpośrednio na profilu mentora.',
  },
  {
    id: '09',
    title: 'Co zrobić, jeśli mam problem z sesją lub z mentorem?',
    description:
        'Jeśli napotkasz jakiekolwiek problemy podczas sesji lub z mentorem, możesz skontaktować się z naszym zespołem wsparcia, który pomoże Ci rozwiązać problem. Wszystkie zgłoszenia są traktowane poufnie i rozpatrywane indywidualnie.',
  },
];


export const fetchFaqList = async () => {
  try {
    // TODO
    // const response = await axios.get('/api/.......')
    // return response.data
    return faqList
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
