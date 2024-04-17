export function numWithZero(num) {
  if(num < 10) return `0${num}`;
  return num.toString();
}

export function dateToIso(date) {
  return `${date.getFullYear()}-${numWithZero(date.getMonth() + 1)}-${numWithZero(date.getDate())}`;
}

export function dateToLocale(date) {
  return date.toLocaleDateString('ru-RU', {
    month: 'long',
    day: '2-digit',
  });
}
