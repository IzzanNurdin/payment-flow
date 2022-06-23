export function formatNumber(number) {
  return Intl.NumberFormat("en-us").format(number);
}
