# FEWD Course Website

This website is built to be a tool for students taking the [Front-End Web Development](https://generalassemb.ly/education/front-end-web-development) course at [General Assembly](https://generalassemb.ly). It is built with [React](https://facebook.github.io/react/) and [Parse](https://parse.com/). Slides for the individual lessons are created with [reveal-md](https://github.com/webpro/reveal-md).

## Getting Started

### Parse

Parse is used to store the users data. The primary data we store at the moment is user specific info (i.e. avatar url, social info, contact info, etc.). In the future we might store information about attendance and homework.

1. Goto https://parse.com/ and create an account
2. Create a new app
3. Inside your new app, goto Settings -> Keys
4. Update the `app/constants/appConstants.js` file with your Parse Application ID, Master Key, Rest API Key, and JavaScript Key.
