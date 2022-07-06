export function doLogin(urlToSend: string) {
    let username = document.getElementById("usrnm") as HTMLInputElement;
    let password = document.getElementById("paswd") as HTMLInputElement;

    if (formsAreInvalid(username.value, password.value)) return;


    
}

function formsAreInvalid(username: string, password: string): boolean {
    if (username == undefined || username.length <= 0) {
        return true;
    }

    if (password == undefined || password.length <= 0) {
        return true;
    }

    return false;
}