import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom Delete User', () => {
    it('should delete user', async () => {
        const userid = process.env.ZOOM_USERID!
        const user = await main(resource, userid);
        expect(() => user).not.toThrow();
    });
});
