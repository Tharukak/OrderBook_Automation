
import { Role } from "./role";
export class User {

    username:  string;
    roles?: Role[];
    scopes?: string[];
    token?: string;
}