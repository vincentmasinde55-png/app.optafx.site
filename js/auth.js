const APP_ID = "33tOVg0Ab0mwjyV0Uwiuq";

function login() {
    window.location.href =
     `https://oauth.deriv.com/oauth2/authorize?app_id=${33tOVg0Ab0mwjyV0Uwiuq}`;
}

function getToken() {
    const params = new URLSearchParams(window.location.search);

    const token =
        params.get("token") ||
        params.get("acct1") ||
        localStorage.getItem("deriv_token");

    if (token) {
        localStorage.setItem("deriv_token", token);
        return token;
    }

    return null;
}
