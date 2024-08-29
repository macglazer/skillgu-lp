export const Company = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
        <p className="text-base mb-4 font-semibold leading-7 text-primary">
            Skillgu.<br />
            Aleje Jerozolimskie 123a<br />
            02-017 Warszawa
        </p>
      <ul className="flex flex-col gap-3">
        <li className="text-14px font-semibold leading-[25px] text-base800">
          NIP: <span className="font-medium text-base600">5213641211</span>
        </li>
        <li className="text-14px font-semibold leading-[25px] text-base800">
          KRS: <span className="font-medium text-base600">0000442857</span>
        </li>
        <li className="text-14px font-semibold leading-[25px] text-base800">
          REGON: <span className="font-medium text-base600">146433467</span>
        </li>
      </ul>
    </div>
  )
}
