import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom View Meeting', () => {
    it('should return meeting information', async () => {
        const meetingid = process.env.ZOOM_MEETING_ID!
        const meeting = await main(resource, meetingid);
        expect(meeting).toBeDefined();
        expect(meeting.id?.toString()).toBe(meetingid.toString());
    });
});
