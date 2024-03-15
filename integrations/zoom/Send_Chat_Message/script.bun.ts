import zoomApi, { type Meeting, } from 'zoomapi';
import type { resource } from '../resource';

export type SendChatMessageParams = {
    at_items: AtItemsItem[];
    rich_text: RichTextItem[];
    message: string;
    file_ids: string[];
    reply_main_message_id: string;
    to_channel: string;
    to_contact: string;
};

interface AtItemsItem {
    at_contact: string;
    at_type: number;
    end_position: number;
    start_position: number;
}

interface RichTextItem {
    start_position: number;
    end_position: number;
    format_type: string;
    format_attr: string;
}

export async function main(resource: resource, chatParams: SendChatMessageParams) {
    const client = zoomApi(resource);
    const createdMeeting = await client.chat.SendChatMessage(chatParams);
    return createdMeeting;
}

