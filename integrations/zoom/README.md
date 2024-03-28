# Zoom Integration Quickstart

To integrate Zoom into your application, follow these concise steps:

1. Visit the [Zoom App Marketplace](https://marketplace.zoom.us/) and create an account if you haven't already.

2. In the top navigation bar, click on **Develop** and select **Build Server-to-Server App**.

3. Navigate to the **Scopes** settings of your app and add the following scopes:
   - Account
   - Team Chat
   - Meeting
   - Report
   - User
   - Webinar

Set up the following environment variables with your credentials:

```
ZOOM_ACCOUNT_ID=your_zoom_account_id
ZOOM_OAUTH_CLIENT_ID=your_oauth_client_id
ZOOM_OAUTH_CLIENT_SECRET=your_oauth_client_secret
ZOOM_WEBHOOK_SECRET_TOKEN=your_webhook_secret_token
```