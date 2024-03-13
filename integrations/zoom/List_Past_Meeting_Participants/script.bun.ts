import zoomApi, { type CreateUserBody, type Meeting, type Registrant } from 'zoomapi';
import { resource } from '../resource';

export async function main(userId: string, registrant: Registrant) {
    try {
        const client = zoomApi(resource);
        const createdMeeting = await client.meetings.(userId, registrant);
        return createdMeeting;
    } catch (error) {
        console.log(error);
    }
}

