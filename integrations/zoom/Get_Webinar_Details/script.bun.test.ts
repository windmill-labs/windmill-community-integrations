import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom View Webinar', () => {
    it('should return webinar information', async () => {
        const webinarid = process.env.ZOOM_WEBINAR_ID!
        const webinar = await main(resource, webinarid);
        expect(webinar).toBeDefined();
        expect(webinar.id?.toString()).toBe(webinarid.toString());
    });
});
