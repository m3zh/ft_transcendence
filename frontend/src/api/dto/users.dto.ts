export interface UsersDto {

    username: string;
    hash: string;
    avatar: string;
    intratoken: string;
    dblauth: boolean;
    mail: string;
    friends: string[];
    blacklist: string[];
    groups: string[];
}