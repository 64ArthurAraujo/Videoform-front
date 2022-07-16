export interface User {
    id: string;
    username: string;
}

export let isValidUser: boolean = false;
export let userInformation: User = {} as User;

export function setLogged(bool: boolean) {
    isValidUser = bool;
}

export function setUserInfo(info: User) {
    userInformation = info;
}
