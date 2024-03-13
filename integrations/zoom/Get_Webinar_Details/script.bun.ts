import zoomApi from 'zoomapi';
import { resource } from '../resource';

export async function main(webinarId: string) {
    try {
        const client = zoomApi(resource);
        const meeting = await client.webinars.GetWebinar(webinarId);
        return meeting;
    } catch (error) {
        console.log(error);
    }
}
