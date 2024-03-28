import zoomApi from 'zoomapi';

type Zoom = {
    accountId: string
    oauthClientId: string
    oauthClientSecret: string
    webhookSecretToken: string
} 

export async function main(resource: Zoom, webinarId: string) {
    const client = zoomApi(resource);
    const meeting = await client.webinars.GetWebinar(webinarId);
    return meeting;
}
