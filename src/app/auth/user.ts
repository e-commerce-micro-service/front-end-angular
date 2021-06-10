import { Role } from './role';

export class User {
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
    roles?: Role[];
    accessToken?: string;
}
