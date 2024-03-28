import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom Update Meeting', () => {
    it('should update meeting information', async () => {
        const webinarid = process.env.ZOOM_WEBINAR_ID!
        const webinar = await main(resource, webinarid, {
            topic: 'New Topic 2',
            agenda: 'New Agenda 2'
        });
        expect(webinar).not.toThrow();
    });
});
