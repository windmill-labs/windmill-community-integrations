import zoomApi from 'zoomapi';

type resource = {
    accountId: string
    oauthClientId: string
    oauthClientSecret: string
    webhookSecretToken: string
} 

export async function main(resource: resource, webinarId: string, webinar: {
    uuid?: string;
    id?: number;
    host_id?: string;
    topic?: string;
    type?: 5 | 6 | 9;
    duration?: number;
    timezone?: string;
    created_at?: string;
    join_url?: string;
    agenda?: string;
    start_time?: string;
}) {
    const client = zoomApi(resource);
    const createdMeeting = await client.webinars.UpdateWebinar(webinarId, webinar);
    return createdMeeting;
}
