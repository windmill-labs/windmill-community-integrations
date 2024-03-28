import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom Update Meeting', () => {
    it('should update meeting information', async () => {
        const meetingid = process.env.ZOOM_MEETING_ID!
        const updateMeeting = async () => {
            await main(resource, meetingid, {
                topic: 'New Topic 2',
                agenda: 'New Agenda 2'
            })
        }
        expect(updateMeeting).not.toThrow();
    });
});
