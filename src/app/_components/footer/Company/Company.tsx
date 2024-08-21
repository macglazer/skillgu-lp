export const Company = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <p className="tetx-base mb-4 font-semibold leading-7 text-primary">
        Skillgu
      </p>
      <ul className="flex flex-col gap-3">
        <li className="text-14px font-semibold leading-[25px] text-base800">
          NIP: <span className="font-medium text-base600">0000</span>
        </li>
        <li className="text-14px font-semibold leading-[25px] text-base800">
          KRS: <span className="font-medium text-base600">0000</span>
        </li>
        <li className="text-14px font-semibold leading-[25px] text-base800">
          REGON:{' '}
          <span className="font-medium text-base600">0000</span>
        </li>
      </ul>
    </div>
  )
}
