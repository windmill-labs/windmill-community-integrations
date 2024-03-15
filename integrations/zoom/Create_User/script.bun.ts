import zoomApi from 'zoomapi';
import type { resource } from '../resource';

/**
 * 1 - Basic.
 * 2 - Licensed.
 * 3 - On-prem.
 */
export type UserAccountType = 1 | 2 | 3;

export type CreateUserBody = {
    action: 'create' | 'autoCreate' | 'custCreate' | 'ssoCreate';
    user_info?: {
        email: string;
        type: UserAccountType;
        first_name?: string;
        last_name?: string;
        password?: string;
    };
};

export async function main(resource: resource, user: CreateUserBody) {
    const client = zoomApi(resource);
    const createdUser = await client.users.CreateUser(user);
    return createdUser;

}
