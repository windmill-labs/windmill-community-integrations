import zoomApi, { type CreateUserBody } from 'zoomapi';
import { resource } from '../resource';

export async function main(user: CreateUserBody) {
    try {
        const client = zoomApi(resource);
        const createdUser = await client.users.CreateUser(user);
        return createdUser;
    } catch (error) {
        console.log(error);
    }

}
