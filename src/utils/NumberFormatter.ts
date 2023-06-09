export const NumberFormatter = (num: number) => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g
  return num.toString().replace(regexp, ',')
}
