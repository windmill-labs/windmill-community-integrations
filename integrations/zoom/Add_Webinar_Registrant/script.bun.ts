import zoomApi, { type Registrant } from 'zoomapi';
import { resource } from '../resource';

export async function main(webinarId: string, registrant: Registrant) {
    try {
        const client = zoomApi(resource);
        const meeting = await client.webinars.AddWebinarRegistrant(webinarId, registrant);
        return meeting;
    } catch (error) {
        console.log(error);
    }
}
