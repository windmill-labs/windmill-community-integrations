import zoomApi from 'zoomapi';

type Zoom = {
    accountId: string
    oauthClientId: string
    oauthClientSecret: string
    webhookSecretToken: string
} 

export async function main(resource: resource, meetingId: string) {
    const client = zoomApi(resource);
    const meeting = await client.meetings.GetMeeting(meetingId);
    return meeting;
}
