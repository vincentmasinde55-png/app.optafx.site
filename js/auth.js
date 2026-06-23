
const APP_ID = CONFIG.33tOVg0Ab0mwjyV0Uwiuq;

function login() {
  const url =
    `https://oauth.deriv.com/oauth2/authorize?app_id=${33tOVg0Ab0mwjyV0Uwiuq}`;
  window.location.href = url;
}

function getToken() {
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.replace("#", ""));
  return params.get("access_token");
}

function saveSession() {
  const token = getToken();
  if (token) {
    localStorage.setItem("deriv_token", token);
    return token;
  }
  return localStorage.getItem("deriv_token");
}
