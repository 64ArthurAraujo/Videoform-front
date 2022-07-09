export function doLogin(urlToSend: string) {
    let username = document.getElementById("usrnm") as HTMLInputElement;
    let password = document.getElementById("psswd") as HTMLInputElement;

    if (formsAreInvalid(username, password)) return;

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
                case 401: console.error("Login failed, no matching credentials found.");
                    break;
                
                case 200: console.log("Authorized");
                    break;
                
                default: console.error("Error unexpected status code");
            }
        }
    }

    xhr.send(JSON.stringify(loginInformation));
}

function formsAreInvalid(username: HTMLInputElement, password: HTMLInputElement): boolean {
    if (!username || username.value.length <= 0) {
        console.error("Username is not defined");
        return true;
    }

    if (!password || password.value.length <= 0) {
        console.error("Password is not defined");
        return true;
    }

    return false;
}