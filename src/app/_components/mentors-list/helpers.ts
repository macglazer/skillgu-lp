export const getReviewText = (number: number): string => {
  const unity = number % 10
  if (unity === 1) {
    return 'recenzja'
  } else if (unity > 1 && unity < 5) {
    return 'recenzje'
  } else {
    return 'recenzji'
  }
}
