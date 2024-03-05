# Quickbooks Integration

## Environment variables and credentials setup

To get started with the Quickbooks integration, you will need to set up the following environment variables:

- `CLIENT_ID`
- `CLIENT_SECRET`
- `REALM_ID`
- `REFRESH_TOKEN`
- `ACCESS_TOKEN`
- `IS_SANDBOX`

The value of `IS_SANDBOX` should be set to `true` if you are using a sandbox account, and `false` if you are using a production account. Default is `true`.

The plugin needs OAuth 2.0 credentials to authenticate with Quickbooks. You can get these credentials by creating a new app in the [Quickbooks Developer Portal](https://developer.intuit.com/app/developer/qbo/docs/get-started/get-client-id-and-client-secret). This will allow you to play with the code without actually integrating it with your codebase, or if you want to test the plugin manually.

To make the plugins work in realtime, you will need to set up Intuit's OAuth SDK. You can find the documentation for the SDK [here](https://developer.intuit.com/app/developer/qbo/docs/develop/sdks-and-samples-collections/nodejs/oauth-nodejs-client). After you have done this, you can just plug the details like `CLIENT_ID`, `CLIENT_SECRET`, `REALM_ID`, `REFRESH_TOKEN` and `ACCESS_TOKEN` into the plugin's resource block.
