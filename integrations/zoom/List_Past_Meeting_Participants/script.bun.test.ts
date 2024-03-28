import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom List Past Meeting Participants', () => {
    it('should return past meeting participants', async () => {
        const meetingId = process.env.ZOOM_MEETING_ID!
        const participants = await main(resource, meetingId);
        expect(participants).toBeDefined();
        expect(participants.participants.length).toBeGreaterThan(0);
    });
});
