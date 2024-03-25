import zoomApi, { type WebinarParticipantReportResponse } from 'zoomapi';

type Zoom = {
    accountId: string
    oauthClientId: string
    oauthClientSecret: string
    webhookSecretToken: string
} 

export async function main(resource: resource, webinarId: string) {

    const client = zoomApi(resource);
    let nextPageToken: string | undefined;
    let allParticipants: WebinarParticipantReportResponse['participants'] = [];

    do {
        const params = nextPageToken ? { next_page_token: nextPageToken } : {};
        const response = await client.webinars.ReportWebinarParticipants(webinarId, params);
        allParticipants = allParticipants.concat(response.participants);
        nextPageToken = response.next_page_token;
    } while (nextPageToken);

    return { participants: allParticipants };
}
