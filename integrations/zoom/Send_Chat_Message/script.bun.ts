import zoomApi from 'zoomapi';

type resource = {
    accountId: string
    oauthClientId: string
    oauthClientSecret: string
    webhookSecretToken: string
} 

export async function main(resource: resource, chatParams: {
    at_items: {
        at_contact: string;
        at_type: number;
        end_position: number;
        start_position: number;
    }[];
    rich_text: {
        start_position: number;
        end_position: number;
        format_type: string;
        format_attr: string;
    }[];
    message: string;
    file_ids: string[];
    reply_main_message_id: string;
    to_channel: string;
    to_contact: string;
}) {
    const client = zoomApi(resource);
    const createdMeeting = await client.chat.SendChatMessage(chatParams);
    return createdMeeting;
}

