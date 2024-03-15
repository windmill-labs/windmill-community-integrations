import zoomApi from 'zoomapi';
import type { resource } from '../resource';
export type Webinar = {
    uuid?: string;
    id?: number;
    host_id?: string;
    topic?: string;
    type?: WebinarType;
    duration?: number;
    timezone?: string;
    created_at?: string;
    join_url?: string;
    agenda?: string;
    start_time?: string;
};
export type WebinarType = 5 | 6 | 9;

export async function main(resource: resource, webinarId: string, webinar: Webinar) {
    const client = zoomApi(resource);
    const createdMeeting = await client.webinars.UpdateWebinar(webinarId, webinar);
    return createdMeeting;
}
