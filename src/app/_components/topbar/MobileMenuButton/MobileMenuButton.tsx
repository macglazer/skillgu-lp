export const MobileMenuButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="flex items-center justify-center px-2 hover:cursor-pointer lg:hidden"
      aria-label="Mobile menu icon"
      onClick={onClick}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 16H28M4 8H28M4 24H28"
          stroke="#252B61"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
