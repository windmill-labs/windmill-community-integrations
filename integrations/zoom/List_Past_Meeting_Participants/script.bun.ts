import zoomApi, { type GetMeetingParticipantReportsResponse } from 'zoomapi';

type Zoom = {
    accountId: string
    oauthClientId: string
    oauthClientSecret: string
    webhookSecretToken: string
} 

export async function main(resource: Zoom, meetingId: string) {
    const client = zoomApi(resource);
    let nextPageToken: string | undefined;
    let allParticipants: GetMeetingParticipantReportsResponse['participants'] = [];

    do {
        const params = nextPageToken ? { next_page_token: nextPageToken } : {};
        const response = await client.reports.GetMeetingParticipantReports(meetingId, params);
        allParticipants = allParticipants.concat(response.participants);
        nextPageToken = response.next_page_token;
    } while (nextPageToken);

    return { participants: allParticipants };
}

