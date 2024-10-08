export const Youtube = ({
  className,
  color = '#56658F',
}: {
  className?: string
  color?: string
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.6665 5.33325H9.33317C5.33317 5.33325 2.6665 7.99992 2.6665 11.9999V19.9999C2.6665 23.9999 5.33317 26.6666 9.33317 26.6666H22.6665C26.6665 26.6666 29.3332 23.9999 29.3332 19.9999V11.9999C29.3332 7.99992 26.6665 5.33325 22.6665 5.33325ZM18.5199 17.3733L15.2265 19.3466C13.8931 20.1466 12.7998 19.5333 12.7998 17.9733V14.0133C12.7998 12.4533 13.8931 11.8399 15.2265 12.6399L18.5199 14.6132C19.7865 15.3866 19.7865 16.6133 18.5199 17.3733Z"
        fill={color}
      />
    </svg>
  )
}
