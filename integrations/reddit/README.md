# Reddit Integration

## Environment variables and credentials setup

First, you will need to create a app on Reddit. You can do this by following the steps below:

## Create a Reddit app
1. Sign in to your Reddit account, and go to the [Reddit app preferences page](https://www.reddit.com/prefs/apps) and clicking "are you a developer? create an app...".
2. Enter a name for your app.
3. Select app type "script".
4. Add a description.
5. Add an "about url".
6. Add a "redirect uri" (this can be any valid url).
7. Click **create app**.
8. You will now see your app's client id and client secret. 
9. Set the `CLIENT_ID` and `CLIENT_SECRET` environment variables to the client id and client secret respectively.
10. Set the `USERNAME` and `PASSWORD` environment variables to your Reddit username and password respectively.
11. Set the `USER_AGENT` environment variable to a string that identifies your app, like `'MyRedditApp v1.0 by /u/YourRedditUsername'`.
