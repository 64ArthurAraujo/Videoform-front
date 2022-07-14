
export function formsAreInvalid(username: HTMLInputElement, password: HTMLInputElement, passwordExt?: HTMLInputElement): boolean {
    if (!username || username.value.length <= 0) {
        console.error("Username is not defined");
        return true;
    }

    if (!password || password.value.length <= 0) {
        console.error("Password is not defined");
        return true;
    }

    if (passwordExt != null) {
        if (!passwordExt || passwordExt.value.length <= 0) {
            console.error("Password confirmation is not defined");
            return true;
        }
    } 

    return false;
}