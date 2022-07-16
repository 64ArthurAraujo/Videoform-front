export interface UserInformation {
    id: string;
    username: string;
}

export let isValidUser: boolean = false;
export let userInformation: UserInformation = {} as UserInformation;

export function setLogged(bool: boolean) {
    isValidUser = bool;
}

export function setUserInfo(info: UserInformation) {
    userInformation = info;
}
