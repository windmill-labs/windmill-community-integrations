import { main } from './script.bun';
import { describe, it, expect } from 'bun:test';
import { resource } from '../resource.ts'

describe('Zoom send chat message', () => {
    it('should send a chat message', async () => {
        const email = process.env.ZOOM_EMAIL!
        const channelId = process.env.ZOOM_CHANNEL_ID!
        const message = await main(resource,{
            at_items: [],
            rich_text: [],
            message: 'Hello World',
            file_ids: [],
            reply_main_message_id: '',
            to_channel: channelId,
            to_contact: email
        });
        expect(message.id).toBeDefined()
    });
});
