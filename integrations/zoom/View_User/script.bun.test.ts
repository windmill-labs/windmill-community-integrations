import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom View User', () => {
  it('should return user information', async () => {
    const userid = process.env.ZOOM_USERID!;
    const user = await main(resource, userid);
    expect(user).toBeDefined();
    expect(user.id).toBe(userid);
  });
});
