// export class User {
//     id: string;
//     username: string;
//     password: string;
//     firstName: string;
//     lastName: string;
//     token: string;
// }
import { Role } from "./role";

export class User {
    user_name: string;
    roles?: Role[];
    scopes?: string[];
    token?: string;
}