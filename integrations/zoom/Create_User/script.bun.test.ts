import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom Create User', () => {
    it('should return created user information', async () => {
        const email = process.env.ZOOM_EMAIL!
        const user = await main(resource, {
            action: 'create',
            user_info: {
                email: email,
                type: 1
            }
        });
        expect(user).toBeDefined();
        expect(user.email).toBe(email);
    });
});
