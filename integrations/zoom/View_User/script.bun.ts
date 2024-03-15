import zoomApi from 'zoomapi';
import type { resource } from '../resource';

export async function main(resource: resource, userid: string) {
    const client = zoomApi(resource);
    const createdUser = await client.users.GetUser(userid);
    return createdUser;
}
