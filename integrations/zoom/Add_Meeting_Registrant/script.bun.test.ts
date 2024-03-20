import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'
import zoomApi from 'zoomapi';

describe('Zoom Add Meeting Registrants', () => {
    it('should add meeting registrants', async () => {
        const meetingid = process.env.ZOOM_MEETING_ID!
        const email = process.env.ZOOM_EMAIL!
        const meeting = await main(resource, meetingid, {
            email: email,
            first_name: 'test'
        });
        const client = zoomApi(resource);
        const registrants = await client.meetings.ListRegistrants(meetingid);
        expect(meeting.id.toString()).toBe(meetingid);
        expect(registrants.registrants[0].email).toBe(email);
    });
});
