import zoomApi from 'zoomapi';
import { resource } from '../resource';

export async function main(meetingId: string) {
    try {
        const client = zoomApi(resource);
        const meeting = await client.meetings.GetMeeting(meetingId);
        return meeting;
    } catch (error) {
        console.log(error);
    }
}
