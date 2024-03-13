import zoomApi, { type CreateUserBody, type Meeting } from 'zoomapi';
import { resource } from '../resource';

export async function main(userId: string, meeting: Meeting) {
    try {
        const client = zoomApi(resource);
        const createdMeeting = await client.meetings.CreateMeeting(userId, meeting);
        return createdMeeting;
    } catch (error) {
        console.log(error);
    }
}
