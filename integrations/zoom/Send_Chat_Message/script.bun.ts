import zoomApi, { type Meeting, type SendChatMessageParams } from 'zoomapi';
import { resource } from '../resource';

export async function main(chatParams: SendChatMessageParams) {
    try {
        const client = zoomApi(resource);
        const createdMeeting = await client.chat.SendChatMessage(chatParams);
        return createdMeeting;
    } catch (error) {
        console.log(error);
    }
}

