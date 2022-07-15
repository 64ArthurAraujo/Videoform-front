import { formsAreInvalid } from "./util/check-forms";

export function doRegister(urlToSend: string) {
    let username = document.getElementById("usrnm") as HTMLInputElement;
    let password = document.getElementById("psswd") as HTMLInputElement;
    let passwordext = document.getElementById("psswde") as HTMLInputElement;

    if (formsAreInvalid(username, password, passwordext)) return;

    const loginInformation = 
    { 
        "username": `${username.value}`,
        "password": `${password.value}`
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', urlToSend, true);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhr.onreadystatechange = function () { 
        if (this.readyState === XMLHttpRequest.DONE) 
        {
            switch (this.status) {  
                case 201: saveTokenAndRedirect(this.responseText);
                    break;
                
                default: console.error("Error unexpected status code: " + this.status);
            }
        }
    }

    xhr.send(JSON.stringify(loginInformation));
}

function saveTokenAndRedirect(token: string) {
    document.cookie = `atoken=${token}`;
    window.location.replace("http://localhost:8080/");
}