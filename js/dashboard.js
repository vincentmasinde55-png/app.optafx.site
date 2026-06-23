function logout(){

    localStorage.removeItem("deriv_token");

    window.location.href="index.html";

}

window.onload=()=>{

    if(!localStorage.getItem("deriv_token")){

        window.location.href="index.html";

    }

}
