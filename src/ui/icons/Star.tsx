export const Star = ({
  className,
  color = '#FFC728',
}: {
  className?: string
  color?: string
}) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      aria-label="star"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z"
        fill={color}
      />
    </svg>
  )
}
