import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom list user chat channels', () => {
    it('should list user chat channels', async () => {
        const userId = process.env.ZOOM_USERID!
        const channels = await main(resource, {
            userId: userId
        });
        expect(channels.channels.length).toBeGreaterThan(0);
        expect(channels.channels[0].id).toBeDefined();
    });
});
