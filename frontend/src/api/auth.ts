import { UsersDto } from "./dto/users.dto";

export class Auth {
    public static async logIn(): Promise<UsersDto[]> {
        console.log("auth");
        const res = await fetch("http://localhost:3001/auth", {
            method: "GET"
        })

        const  data = await res.json();
        console.log(data);
        return data;
    }
}