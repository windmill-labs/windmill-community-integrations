# Mailgun Integration

## Environment variables and credentials setup

You will need to create a Mailgun account to get started with the integration. Once you have created an account, you will need to set up the following environment variables:

- `MAILGUN_API_KEY`: Your Mailgun API key. You can create one from the Mailgun dashboard -> API keys.
- `MAILGUN_DOMAIN`: Your Mailgun domain. You can find this in the Mailgun dashboard -> Sending -> Domains.
- `MAILGUN_BASE_URL`: The base URL for the Mailgun API. This is usually `https://api.mailgun.net/v3`.

To test the integration, you will need to add another environment variable:

- `TEST_EMAIL`: The email address you want to send test emails to.

You have to set up this address manually:

- Go to the Mailgun dashboard -> Sending -> Authorized Recipients.
- Add the email address you want to send test emails to.
- Go to your email inbox and confirm the email address.
