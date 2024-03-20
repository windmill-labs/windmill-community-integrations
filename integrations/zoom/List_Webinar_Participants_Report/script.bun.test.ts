import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom List Webinar Participants Report', () => {
    it('should return webinar participants report', async () => {
        const webinarId = process.env.ZOOM_WEBINAR_ID!
        const webinar = await main(resource, webinarId);
        expect(webinar).toBeDefined();
        expect(webinar.participants.length).toBeGreaterThan(0);
    });
});
