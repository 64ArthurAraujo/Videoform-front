import { isLoggedUser, setLogged, setUserInfo, type UserInformation } from "../context/auth-context";

const urlToSend = "http://localhost:8090/api/v0.0.1/retrieve/users/check/token";

export function retrieveLoggedUserInformation(token: string) {
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
                    let tokenIsValid = doAuthExists(this.responseText);

                    setLogged(tokenIsValid);

                    if (tokenIsValid) {
                        let parsedResponse = JSON.parse(this.responseText);
                        setUserInfo(parsedResponse as UserInformation);
                    }
                    break;
                
                default: console.error("Error unexpected status code");
            }
        }
    }

    xhr.send(JSON.stringify(tokenCheckRequest));

}

function doAuthExists(authCheckResult: string) {
    if (authCheckResult !== "User not found") {
        return true;
    } 
    
    return false;
}