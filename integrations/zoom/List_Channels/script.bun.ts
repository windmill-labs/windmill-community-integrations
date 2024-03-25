import zoomApi, { type ListUserChannelsResponse } from 'zoomapi';

type Zoom = {
    accountId: string
    oauthClientId: string
    oauthClientSecret: string
    webhookSecretToken: string
}

export async function main(resource: resource, channelParams: {
    userId: string;
    page_size?: number;
    next_page_token?: string;
}) {
    const client = zoomApi(resource);
    let nextPageToken: string | undefined;
    let allChannels: ListUserChannelsResponse['channels'] = [];

    do {
        const params = nextPageToken ? { next_page_token: nextPageToken } : {};
        const response = await client.chat.ListUserChannels({ ...channelParams, ...params });
        allChannels = allChannels.concat(response.channels);
        nextPageToken = response.next_page_token;
    } while (nextPageToken);

    return { channels: allChannels };
}

