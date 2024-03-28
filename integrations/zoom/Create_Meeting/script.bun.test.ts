import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom Create Meeting', () => {
    it('should return created meeting', async () => {
        const userid = process.env.ZOOM_USERID!
        const meeting = await main(resource, userid, {});
        expect(meeting).toBeDefined();
        expect(meeting.id).toBeDefined();
    });
});
