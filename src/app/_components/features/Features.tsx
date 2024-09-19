import Image from 'next/image'

export const Features = () => {
  return (
    <section className="m-auto flex max-w-xl flex-col gap-10 px-5 pb-[44px] pt-14 md:max-w-fit md:gap-[88px] lg:max-w-[1304px] lg:pt-88px">
      <h3 className="hidden">Features section</h3>
      <div className="md:flex">
        <div className="mb-10 md:mb-0 md:w-1/2 md:pr-10 lg:pr-[76px]">
          <p className="mb-4 text-xl font-bold leading-[26px] lg:text-32px lg:leading-[48px]">
            Dopasowane wyszukiwanie
          </p>
          <p className="text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
            Na Skillgu znajdziesz mentora z kategorii jak IT, Biznes, Kariera,
            Design, Marketing, Rozwój. Wybierz tego który najbardziej odpowiada
            Twoim potrzebom. Dzięki wyszukiwarce znajdziesz bez problemu mentora
            z odpowiednim doświadczeniem i wiedzą, ale przede wszystkim z flow,
            które odpowiada Twoim oczekiwaniom.
          </p>
        </div>
        <div className="rounded-lg bg-secondary/5 px-5 pt-[14px] md:w-1/2 lg:rounded-[20px] lg:px-10 lg:pt-11">
          <Image
            width={700}
            height={700}
            loading="lazy"
            src="/finderMent2.png"
            alt="Picture of finding a mentor"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-xl"
          />
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse">
        <div className="mb-10 md:mb-0 md:w-1/2 md:pl-10 lg:pl-[76px]">
          <p className="mb-4 text-xl font-bold leading-[26px] lg:text-32px lg:leading-[48px]">
            Profil Twojego Mentora
          </p>
          <p className="text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
            W profilu mentora znajdziesz ofertę jak pojedyńcze sesje
            mentoringowe, plany na dłuższą współpracę, umiejętności, tematy,
            oraz oceny od mentee. Ta wizytówka mentora, która prezentuje całą
            ofertę oraz pomaga zdobywać wiarygondność.
          </p>
        </div>
        <div className="rounded-lg bg-secondary/5 px-5 pt-[14px] md:w-1/2 lg:rounded-[20px] lg:px-10 lg:pt-11">
          <Image
            className="rounded-t-[12px]"
            width={700}
            height={700}
            loading="lazy"
            src="/profile.png"
            alt="Mentor profile page"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="md:flex">
        <div className="mb-10 md:mb-0 md:w-1/2 md:pr-10 lg:pr-[76px]">
          <p className="mb-4 text-xl font-bold leading-[26px] lg:text-32px lg:leading-[48px]">
            Bezpośredni kontakt z mentorem
          </p>
          <p className="text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
            Czatuj ze swoim mentorem i uzyskaj odpowiedzi na swoje pytania.
            Dzięki bezpośredniemu kontaktowi możesz szybko rozwiewać
            wątpliwości, omawiać postępy w nauce i uzyskiwać cenne wskazówki na
            bieżąco.
          </p>
        </div>
        <div className="rounded-lg bg-secondary/5 px-5 pt-[14px] md:w-1/2 lg:rounded-[20px] lg:px-10 lg:pt-11">
          <Image
            width={700}
            height={700}
            loading="lazy"
            src="/chatScreen2.png"
            alt="Picture of chat history"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-xl"
          />
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse">
        <div className="mb-10 md:mb-0 md:w-1/2 md:pl-10 lg:pl-[76px]">
          <p className="mb-4 text-xl font-bold leading-[26px] lg:text-32px lg:leading-[48px]">
            Precyzyjne planowanie czasu
          </p>
          <p className="text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
            Nikt nie ma czasu na jego marnowanie. Zintegrowany, przetestowany w
            „warunkach bojowych” kalendarz dopilnuje, aby spotkanie z Twoim
            mentorem było zawsze na czas. A jeżeli zapomnisz o spotkaniu, to
            przypomną ci o tym nasze notyfikacje
          </p>
        </div>
        <div className="rounded-lg bg-secondary/5 px-5 pt-[14px] md:w-1/2 lg:rounded-[20px] lg:px-10 lg:pt-11">
          <Image
            width={700}
            height={700}
            src="/calendar.png"
            loading="lazy"
            alt="Picture of app caledar"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>


  )
}
