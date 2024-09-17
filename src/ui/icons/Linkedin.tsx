export const Linkedin = ({
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.0707 3H8.92933C7.35678 3 5.84863 3.6247 4.73666 4.73666C3.6247 5.84863 3 7.35678 3 8.92933V23.0707C3 24.6432 3.6247 26.1514 4.73666 27.2633C5.84863 28.3753 7.35678 29 8.92933 29H23.0707C24.6432 29 26.1514 28.3753 27.2633 27.2633C28.3753 26.1514 29 24.6432 29 23.0707V8.92933C29 7.35678 28.3753 5.84863 27.2633 4.73666C26.1514 3.6247 24.6432 3 23.0707 3ZM11.7907 23.9893C11.7948 24.0619 11.7841 24.1346 11.7592 24.2029C11.7343 24.2712 11.6957 24.3336 11.6457 24.3864C11.5958 24.4393 11.5356 24.4813 11.4688 24.51C11.402 24.5387 11.33 24.5535 11.2573 24.5533H8.884C8.74099 24.5495 8.60514 24.4899 8.50549 24.3873C8.40583 24.2846 8.35027 24.1471 8.35067 24.004V14.1333C8.34871 14.0621 8.36105 13.9911 8.38698 13.9247C8.4129 13.8583 8.45187 13.7978 8.50159 13.7467C8.55132 13.6956 8.61077 13.655 8.67646 13.6273C8.74214 13.5996 8.81271 13.5853 8.884 13.5853H11.2573C11.3287 13.5851 11.3993 13.5993 11.4651 13.6269C11.5309 13.6546 11.5904 13.6952 11.6402 13.7463C11.6899 13.7974 11.7289 13.858 11.7547 13.9245C11.7806 13.991 11.7928 14.062 11.7907 14.1333V23.9893ZM10.0267 11.5093C9.76971 11.5074 9.51566 11.4549 9.279 11.3548C9.04234 11.2547 8.82772 11.1089 8.64739 10.9259C8.46706 10.7428 8.32455 10.526 8.228 10.2879C8.13144 10.0498 8.08274 9.79495 8.08467 9.538C8.08659 9.28105 8.13911 9.02699 8.23922 8.79033C8.33933 8.55368 8.48508 8.33905 8.66813 8.15872C8.85119 7.97839 9.06797 7.83588 9.3061 7.73933C9.54423 7.64278 9.79905 7.59407 10.056 7.596C10.566 7.61259 11.0494 7.82783 11.4029 8.19581C11.7565 8.56379 11.9522 9.05536 11.9484 9.56564C11.9445 10.0759 11.7414 10.5645 11.3824 10.9271C11.0234 11.2898 10.5369 11.4977 10.0267 11.5067M24.4493 23.9733C24.449 24.1082 24.3963 24.2376 24.3022 24.3341C24.2081 24.4307 24.0801 24.4869 23.9453 24.4907H21.44C21.3051 24.4865 21.1771 24.4301 21.0831 24.3333C20.989 24.2365 20.9363 24.107 20.936 23.972V19.4067C20.936 18.7253 21.144 16.4427 19.128 16.4427C17.556 16.4427 17.2453 18.0427 17.1853 18.7547V24.076C17.1854 24.2112 17.1328 24.3411 17.0387 24.4382C16.9446 24.5352 16.8165 24.5918 16.6813 24.596H14.2507C14.1824 24.596 14.1149 24.5825 14.0519 24.5564C13.9889 24.5302 13.9316 24.4919 13.8834 24.4436C13.8353 24.3953 13.7971 24.338 13.7711 24.2749C13.7451 24.2118 13.7318 24.1442 13.732 24.076V14.0853C13.7358 13.9501 13.7923 13.8217 13.8895 13.7276C13.9866 13.6334 14.1167 13.5809 14.252 13.5813H16.6813C16.8166 13.5809 16.9467 13.6334 17.0439 13.7276C17.141 13.8217 17.1975 13.9501 17.2013 14.0853V14.9453C17.556 14.4262 18.0458 14.0137 18.6177 13.7524C19.1896 13.4911 19.822 13.3909 20.4467 13.4627C24.4933 13.4627 24.4787 17.2427 24.4787 19.392L24.4493 23.9733Z"
        fill={color}
      />
    </svg>
  )
}
