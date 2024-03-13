import zoomApi, { type GetMeetingParticipantReportsResponse } from 'zoomapi';
import { resource } from '../resource';

export async function main(meetingId: string) {
    try {
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
    } catch (error) {
        console.log(error);
    }
}

