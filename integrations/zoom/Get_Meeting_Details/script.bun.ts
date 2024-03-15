import zoomApi from 'zoomapi';
import type { resource } from '../resource';

export async function main(resource: resource, meetingId: string) {
    const client = zoomApi(resource);
    const meeting = await client.meetings.GetMeeting(meetingId);
    return meeting;
}
