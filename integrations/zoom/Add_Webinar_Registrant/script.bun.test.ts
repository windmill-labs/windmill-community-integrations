import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'
import zoomApi from 'zoomapi';

describe('Zoom Add Webinar Registrant', () => {
    it('should add a webinar registrant', async () => {
        const webinarId = process.env.ZOOM_WEBINAR_ID!
        const email = process.env.ZOOM_EMAIL!
        const webinar = await main(resource, webinarId, {
            email: email,
            first_name: 'test'
        });
        const client = zoomApi(resource);
        const registrants = await client.webinars.ListWebinarRegistrants(webinarId);
        expect(webinar?.id.toString()).toBe(webinarId);
        expect(registrants.registrants[0].email).toBe(email);
    });
});
