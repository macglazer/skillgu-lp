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
        'Aby założyć konto jako mentor, kliknij przycisk „Zostań mentorem” w prawym górnym rogu strony głównej. Wypełnij formularz swoimi danymi oraz informacjami o swoim doświadczeniu. Po zakończeniu procesu rejestracji Twoje konto zostanie zweryfikowane przez nasz zespół.',
  },
  {
    id: '02',
    title: 'Jak mogę założyć konto jako mentee?',
    description:
        'Aby założyć konto jako mentee, kliknij przycisk „Mój profil” w prawym górnym rogu strony głównej. Do wyboru masz dwie opcje, rejestracje za pomocą danych lub poprzez google. Wypełnij formularz swoimi danymi. Po zakończeniu procesu rejestracji Twoje konto zostanie autoryzowane.',
  },
  {
    id: '03',
    title: 'Jak mogę znaleźć mentora odpowiadającego moim potrzebom?',
    description:
        'Aby znaleźć mentora, skorzystaj z naszej wyszukiwarki dostępnej w aplikacji.Znajdziesz ją, klikając na stronie głównej w "Znajdź mentora". Możesz filtrować mentorów według katergorii, umiejętności, usługi oraz tematów spotkań. Po znalezieniu odpowiedniego mentora możesz umówić się na pierwszą sesję.',
  },
  {
    id: '04',
    title: 'Jak przebiega proces umawiania się na sesję mentoringową?',
    description:
        'Po wybraniu mentora możesz umówić się na sesję lub jak jesteś zalogowany mentorship poprzez wybranie sesji lub mentorshipu i nastepnie pojawi się kalendarz dostępny na profilu mentora. Wybierz dogodny termin, a następnie potwierdź swoją rezerwację. Otrzymasz potwierdzenie e-mailowe z danymi dotyczącymi sesji.',
  },
  {
    id: '05',
    title: 'Jakie są koszty korzystania z usług mentorów?',
    description:
        'Koszty sesji z mentorami zależą od ich doświadczenia oraz długości trwania sesji. Szczegółowe informacje o cenach znajdziesz na profilu każdego mentora. Płatności dokonuje się z góry za pomocą bezpiecznego systemu płatności STRIPE dostępnego na naszej platformie.',
  },
  {
    id: '06',
    title: 'Czy mogę zmienić swojego mentora?',
    description:
        'Tak, możesz zmienić mentora w każdej chwili. Jeśli po kilku sesjach stwierdzisz, że inny mentor lepiej odpowiada Twoim potrzebom, możesz zakończyć mentoring na swoim profilu i umówić się na sesję z nowym mentorem.',
  },
  {
    id: '07',
    title: 'Jak mogę zrezygnować z subskrypcji?',
    description:
        'Aby zrezygnować z subskrypcji, przejdź do sekcji „Subskrypcje” i wybierz trenera u którego masz wykupiony plan. Po potwierdzeniu rezygnacji Twoja subskrypcja nie zostanie odnowiona z nowym miesiącem, jeżeli zapłaciłeś z góry, subsrypcja wygaśnie z ostatnimi zajęciami.',
  },
  {
    id: '08',
    title: 'Czy mogę mieć więcej niż jednego mentora?',
    description:
        'Tak, możesz współpracować z wieloma mentorami jednocześnie, szczególnie jeśli chcesz rozwijać się w różnych obszarach. Każdy mentor ma swoje unikalne umiejętności, które mogą przyczynić się do Twojego rozwoju zawodowego i osobistego.',
  },
  {
    id: '09',
    title: 'Jak mogę ocenić mojego mentora po zakończeniu sesji?',
    description:
        'Po zakończeniu sesji otrzymasz możliwość oceny mentora. Twoja opinia jest dla nas bardzo ważna i pomoże innym użytkownikom w wyborze odpowiedniego mentora. Ocenę możesz wystawić bezpośrednio na profilu mentora.',
  },
  {
    id: '10',
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
