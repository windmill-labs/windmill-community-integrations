import zoomApi from 'zoomapi';
import { resource } from '../resource';

export async function main(userid: string) {
    try {
        const client = zoomApi(resource);
        const createdUser = await client.users.GetUser(userid);
        return createdUser;
    } catch (error) {
        console.log(error);
    }
}
