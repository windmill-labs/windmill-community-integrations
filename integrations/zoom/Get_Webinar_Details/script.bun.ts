import zoomApi from 'zoomapi';

type resource = {
    accountId: string
    oauthClientId: string
    oauthClientSecret: string
    webhookSecretToken: string
} 

export async function main(resource: resource, webinarId: string) {
    const client = zoomApi(resource);
    const meeting = await client.webinars.GetWebinar(webinarId);
    return meeting;
}
