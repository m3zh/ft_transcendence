import { UsersDto } from "./dto/users.dto";

export class Auth {
    public static async logIn(): Promise<UsersDto[]> {
        console.log("Auth");
        const res = fetch("http://localhost:3001/auth");
        const  data = await res;
        console.log(data);
        return data.json();
    }
}