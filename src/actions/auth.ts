import { setLogged } from "../context/auth-context";

const urlToSend = "http://localhost:8090/api/v0.0.1/retrieve/users/check/token";

export function checkAuthTokenExists(token: string) {
    let tokenCheckRequest = 
    {
        "token": token,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', urlToSend, true);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhr.onreadystatechange = function () { 
        if (this.readyState === XMLHttpRequest.DONE) 
        {
            switch (this.status) {
                case 200: 
                    let isAuthTokenValid = doAuthExists(this.responseText);
                    setLogged(isAuthTokenValid);

                    break;
                
                default: console.error("Error unexpected status code");
            }
        }
    }

    xhr.send(JSON.stringify(tokenCheckRequest));

}

function doAuthExists(doAuthTokenExists: string) {
    if (doAuthTokenExists === "true") {
        return true;
    } 
    
    return false;
}