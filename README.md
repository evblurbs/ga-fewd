# FEWD Course Website

This website is built to be a tool for students taking the [Front-End Web Development](https://generalassemb.ly/education/front-end-web-development) course at [General Assembly](https://generalassemb.ly). It is built with [React](https://facebook.github.io/react/) and [Parse](https://parse.com/). Slides for the individual lessons are created with [reveal-md](https://github.com/webpro/reveal-md).

## Getting Started

### Parse

Parse is used to store the users data. The primary data we store at the moment is user specific info (i.e. avatar url, social info, contact info, etc.). In the future we might store information about attendance and homework.

1. Goto https://parse.com/ and create an account
2. Create a new app
3. Inside your new app, goto Settings -> Keys
4. Update the [`app/constants/appConstants.js`](https://github.com/evblurbs/ga-fewd/blob/master/app/constants/appConstants.js) file with your Parse Application ID, Master Key, Rest API Key, and JavaScript Key.


### GitHub

GitHub is used for logging in, and is where we grab the user's email, username, avatar, and GitHub info. We will use OAuth to login users (a node example is provided below, but feel free to create your own OAuth).

1. Goto https://github.com/settings/applications/new
2. Register a new app. You will need the `Client ID` and `Client Secret` for OAuth.

### Node Server

A Node server is not required, as the React application can run from a static HTTP server. The only server-side dependency is the OAuth, which you could implement in another language if you wanted. Some of the [util objects](https://github.com/evblurbs/ga-fewd/tree/master/app/utils) have functions to help with the server-side workflow, which would also have to be transfered to the new language.
