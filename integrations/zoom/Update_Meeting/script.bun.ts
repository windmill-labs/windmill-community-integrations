import zoomApi, { type Meeting } from 'zoomapi';
import { resource } from '../resource';

export async function main(meetingId: string, meeting: Meeting) {
    try {
        const client = zoomApi(resource);
        const createdMeeting = await client.meetings.UpdateMeeting(meetingId, meeting);
        return createdMeeting;
    } catch (error) {
        console.log(error);
    }
}

