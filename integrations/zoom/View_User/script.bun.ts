import zoomApi from 'zoomapi';

type Zoom = {
    accountId: string
    oauthClientId: string
    oauthClientSecret: string
    webhookSecretToken: string
} 

export async function main(resource: Zoom, userid: string) {
    const client = zoomApi(resource);
    const createdUser = await client.users.GetUser(userid);
    return createdUser;
}
