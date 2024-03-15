import zoomApi from 'zoomapi';
import type { resource } from '../resource';

export type Registrant = {
    id?: string;
    email: string;
    first_name: string;
    last_name?: string;
    address?: string;
    city?: string;
    country?: string;
    zip?: string;
    state?: string;
    phone?: string;
    industry?: string;
    org?: string;
    job_title?: string;
    purchasing_time_frame?: string;
    role_in_purchase_process?: string;
    no_of_employees?: string;
    comments?: string;
    custom_questions?: Question[];
    status?: RegistrantStatus;
    create_time?: string;
    join_url?: string;
};

export type Question = {
    title: string;
    value?: string;
};
export type RegistrantStatus = 'approved' | 'pending' | 'denied';

export async function main(resource: resource, webinarId: string, registrant: Registrant) {
    try {
        const client = zoomApi(resource);
        const meeting = await client.webinars.AddWebinarRegistrant(webinarId, registrant);
        return meeting;
    } catch (error) {
        console.log(error);
    }
}
