export const Skillgu = ({
  className,
  color = '#56658F',
}: {
  className?: string
  color?: string
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_8080_26380)">
        <path
          d="M10.1819 17.7539C4.71595 16.0034 2.50099 13.8599 2.50099 10.3945C2.50099 8.75117 3.28695 6.96491 4.6445 5.64308C5.82343 4.42844 8.00266 3.03516 11.5037 3.03516H11.5395C14.4689 3.03516 16.791 3.92828 18.4344 5.71453C20.5779 8.0724 20.6851 11.1448 20.6493 12.2522H16.5052C16.5052 11.9664 16.5767 9.85865 15.3263 8.5011C14.5404 7.6437 13.2542 7.17926 11.5395 7.17926H11.5037C9.43167 7.17926 8.21701 7.9295 7.57396 8.57255C6.9309 9.21559 6.6451 9.96583 6.6451 10.3945C6.6451 11.1448 6.6451 12.2522 11.468 13.8241L12.3254 14.0742C16.148 15.3246 20.5065 16.6821 20.7565 20.5047C20.7922 21.1478 20.7922 23.4342 18.9703 25.3991C17.3269 27.1139 14.8619 28.007 11.6466 28.007H11.6109C9.00297 28.007 6.71655 27.1139 5.03747 25.4348C3.39412 23.7556 2.46527 21.4335 2.50099 19.04L6.6451 19.0757C6.6451 20.3619 7.14525 21.648 8.00266 22.5054C8.89578 23.3985 10.1104 23.8271 11.6109 23.8271H11.6466C13.6472 23.8271 15.112 23.3985 15.9336 22.5411C16.6481 21.7552 16.6124 20.8262 16.6124 20.7905C16.541 19.7902 12.8255 18.6113 11.0393 18.0397L10.1819 17.7539Z"
          fill={color}
        />
        <path
          d="M26.291 28.0078C27.8325 28.0078 29.0821 26.7583 29.0821 25.2168C29.0821 23.6754 27.8325 22.4258 26.291 22.4258C24.7496 22.4258 23.5 23.6754 23.5 25.2168C23.5 26.7583 24.7496 28.0078 26.291 28.0078Z"
          fill="#ED734B"
        />
      </g>
      <defs>
        <clipPath id="clip0_8080_26380">
          <rect
            width="29"
            height="30"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
