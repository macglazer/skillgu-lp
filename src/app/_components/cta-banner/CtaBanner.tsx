import clx from 'classnames'

export const CtaBanner = () => {
  return (
    <div className={clx("bg-primary pt-57px px-5 lg:px-88px pb-88px text-white")}>
      <h3 className={clx("text-48px lg:text-56px font-bold leading-72px lg:leading-100.8px mb-40px lg:mb-24px")}>
        Dołącz do nas już dziś!
      </h3>
      <div className={clx("flex flex-row items-cent gap-3x")}>
        <a
          href="#"
          className={clx("bg-secondary rounded-full text-14 px-32px py-10px text-white")}
        >
          Zostań mentorem
        </a>
        <a
          href="#"
          className={clx("bg-white-11 rounded-full text-14 px-32px py-10px text-white")}
        >
          Zostań uczniem
        </a>
      </div>
    </div>
  )
}
