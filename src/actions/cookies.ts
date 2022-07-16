import { fetchUserInfo } from "./auth";

interface Cookie {
    key: string;
    value: string;
}

export function parseCookies(rawCookies: string) {
    let cookieStrings = rawCookies.split(";").filter(cookie => cookie.trim())
    
    let cookieArray: Cookie[] = [];

    for (const cookieString of cookieStrings) {
        let cookie = 
        {
            "key": cookieString.split("=")[0],
            "value": cookieString.split("=")[1],
        } as Cookie;

        cookieArray.push(cookie);
    }

    return cookieArray;
}

export function doCookieActions() {

    const cookies = parseCookies(document.cookie);

    for (const cookie of cookies) {
        if (cookie.key === "atoken") {
            fetchUserInfo(cookie.value)
        }
    }

}
