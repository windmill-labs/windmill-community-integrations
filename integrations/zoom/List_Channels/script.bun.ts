import zoomApi, { type ListChannelMembersResponse } from 'zoomapi';
import type { resource } from '../resource';


export async function main(resource: resource, channelParams: {
    channel_id: string;
    page_size?: number;
    next_page_token?: string;
}) {
    const client = zoomApi(resource);
    let nextPageToken: string | undefined;
    let allMembers: ListChannelMembersResponse['members'] = [];

    do {
        const params = nextPageToken ? { next_page_token: nextPageToken } : {};
        const response = await client.chat.ListChannelMembers({ ...channelParams, ...params });
        allMembers = allMembers.concat(response.members);
        nextPageToken = response.next_page_token;
    } while (nextPageToken);

    return { members: allMembers };
}

