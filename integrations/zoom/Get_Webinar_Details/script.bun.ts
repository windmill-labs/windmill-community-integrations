import zoomApi from 'zoomapi';
import type { resource } from '../resource';

export async function main(resource: resource, webinarId: string) {
    const client = zoomApi(resource);
    const meeting = await client.webinars.GetWebinar(webinarId);
    return meeting;
}
