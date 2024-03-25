import zoomApi from 'zoomapi';

type Zoom = {
    accountId: string
    oauthClientId: string
    oauthClientSecret: string
    webhookSecretToken: string
} 

export async function main(resource: resource, webinarId: string) {
    const client = zoomApi(resource);
    const createdMeeting = await client.webinars.ListPastWebinarQA(webinarId);
    return createdMeeting;
}
