export const getParameterByName = (name: string, url: string) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const containsSpecialChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    if ("!@#$%^&*()_+-=[]{};':\"\\|,.<>/?".indexOf(str[i]) !== -1) {
      return true;
    }
  }
  return false;
};

export const startsWithNumber = (str) => {
  return !isNaN(parseInt(str[0]));
};

export const containsUpperCase = (str) => {
  return /[A-Z]/.test(str);
};

export const getQuery = (key: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(key);
};
