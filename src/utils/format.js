export function formatNumber(number) {
  return Intl.NumberFormat("en-us").format(number);
}

export function randomString(length) {
  const characters = "abcdefghjklmnpqrstuvwxyz23456789";
  let result = "";
  const charactersLength = characters.length;

  for (var i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
