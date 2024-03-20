import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom List Past Webinar Q&A', () => {
    it('should return past webinar Q&A', async () => {
        const webinarId = process.env.ZOOM_WEBINAR_ID!
        const webinar = await main(resource, webinarId);
        expect(webinar).toBeDefined();
        expect(webinar.questions.length).toBeGreaterThan(0);
    });
});
