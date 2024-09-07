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

export function fileToBase64(file) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      res(reader.result);
    };
    reader.onerror = function(error) {
      rej(error);
    };
  });
}
