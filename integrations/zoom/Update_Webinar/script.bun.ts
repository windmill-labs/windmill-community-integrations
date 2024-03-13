import zoomApi, { type Meeting, type Webinar } from 'zoomapi';
import { resource } from '../resource';

export async function main(webinarId: string, webinar: Webinar) {
    try {
        const client = zoomApi(resource);
        const createdMeeting = await client.webinars.UpdateWebinar(webinarId, webinar);
        return createdMeeting;
    } catch (error) {
        console.log(error);
    }
}
