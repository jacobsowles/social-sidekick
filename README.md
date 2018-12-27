# Social Sidekick
Manage profile information between your various social media accounts.

![Connecting to GitHub demo](/screenshots/demo.gif "Connecting to GitHub")

Note: Facebook and Twitter connections are mocked up for demo purposes but are not yet available.

## Getting Started

First, install dependencies:
```
$ npm install
```

Then you'll need to add a `.env` file in the api root directory. This file contains sensitive information like usernames, passwords, and API keys that should not be checked into the code repository. Add the following entries to this file:

```
BASE_URL=http://localhost:8080
SESSION_SECRET=<your secret>
MONGODB_URI=mongodb://<your mongodb uri>
MLAB_API_KEY=<your key>
```

Then you can run the SPA and the API in development mode (watching for changes) with:
```
$ npm start
```

And, if you have docker installed, you can dockerize it and run it with:
```
$ npm start:docker
```

### web and api folders

Each folder has its own scripts you can run if you just want to work in one part of the app.

## npm scripts

### npm install
`npm install` will install the root folder (development) dependencies, and after that do the same with `web` dependencies and `api` dependencies.

### npm start
`npm start` will run both subfolders' `npm start` in parallel using [`npm-run-all`](https://github.com/mysticatea/npm-run-all).

### npm run build
`npm run build` will run both subfolders' `npm run build` in parallel.

### npm run start:docker
`npm run start:docker` first call `npm build` then build, create and start two containers, one for node running the api, and the other running nginx serving the static SPA files and proxying all requests starting in `/api/` to the node container.  
After that it opens a browser on "http://localhost:8000/".

You can stop the containers with `npm run stop:docker`.

### npm run test
Change to either the `web` or `api` directories, then run `npm run test` to run all available tests within that directory.

## License

MIT
