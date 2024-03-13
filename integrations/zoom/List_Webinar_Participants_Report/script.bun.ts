import zoomApi, { type Webinar, type WebinarParticipantReportResponse } from 'zoomapi';
import { resource } from '../resource';

export async function main(webinarId: string, webinar: Webinar) {
    try {
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
    } catch (error) {
        console.log(error);
    }
}
