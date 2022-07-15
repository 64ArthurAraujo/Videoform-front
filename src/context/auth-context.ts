export interface UserInformation {
    id: string;
    username: string;
}

export let isLoggedUser: boolean = false;
export let userInformation: UserInformation = {} as UserInformation;

export function setLogged(bool: boolean) {
    isLoggedUser = bool;
}

export function setUserInfo(info: UserInformation) {
    userInformation = info;
}
