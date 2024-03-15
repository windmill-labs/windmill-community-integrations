import zoomApi, { type GetMeetingParticipantReportsResponse } from 'zoomapi';
import type { resource } from '../resource';

export async function main(resource: resource, meetingId: string) {
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

