import Image from 'next/image'

export const Features = () => {
  return (
    <section className="m-auto flex max-w-xl flex-col gap-10 px-5 pb-[44px] pt-14 md:max-w-fit md:gap-[88px] lg:max-w-[1304px] lg:pt-88px">
      <h3 className="hidden">Features section</h3>
      <div className="md:flex">
        <div className="mb-10 md:mb-0 md:w-1/2 md:pr-[76px]">
          <p className="mb-4 text-xl font-bold leading-[26px] lg:text-32px lg:leading-[48px]">
            Wybieraj spośród setek mentorów
          </p>
          <p className="text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
            Wybieraj spośród setek mentorów. Figma ipsum component variant main
            layer. Vertical blur strikethrough font scale bold font. Shadow
            pixel fill arrow font style follower. Blur fill bold background
            opacity
          </p>
        </div>
        <div className="rounded-lg bg-secondary/5 px-5 pt-[14px] md:w-1/2 lg:rounded-[20px] lg:px-10 lg:pt-11">
          <Image
            width={700}
            height={700}
            src="/session.png"
            alt="Mentor profile page"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse">
        <div className="mb-10 md:mb-0 md:w-1/2 md:pl-[76px]">
          <p className="mb-4 text-xl font-bold leading-[26px] lg:text-32px lg:leading-[48px]">
            Wygodny wgląd w kalendarz
          </p>
          <p className="text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
            Nigdy nie przegap spotkań. Figma ipsum component variant main layer.
            Vertical blur strikethrough font scale bold font. Shadow pixel fill
            arrow font style follower. Blur fill bold background opacity.
          </p>
        </div>
        <div className="rounded-lg bg-secondary/5 px-5 pt-[14px] md:w-1/2 lg:rounded-[20px] lg:px-10 lg:pt-11">
          <Image
            width={700}
            height={700}
            src="/calendar.png"
            alt="Picture of app caledar"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="md:flex">
        <div className="mb-10 md:mb-0 md:w-1/2 md:pr-[76px]">
          <p className="mb-4 text-xl font-bold leading-[26px] lg:text-32px lg:leading-[48px]">
            Opcja czatu z mentorem
          </p>
          <p className="text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
            Wybieraj spośród setek mentorów. Figma ipsum component variant main
            layer. Vertical blur strikethrough font scale bold font. Shadow
            pixel fill arrow font style follower. Blur fill bold background
            opacity.
          </p>
        </div>
        <div className="rounded-lg bg-secondary/5 px-5 pt-[14px] md:w-1/2 lg:rounded-[20px] lg:px-10 lg:pt-11">
          <Image
            width={700}
            height={700}
            src="/chat.png"
            alt="Picture of chat history"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  )
}
