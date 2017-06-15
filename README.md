# Skeleton project for Zeit micro based micro-services

## Directory Structure
### `/src`
src holds the main files which run the service.
  - **config** holds all parameters that may need to be adjusted depending on the environemnt
  - **handlers** holds files whic define route handler functions
  - **helpers** holds files which define helper functions such as:
    - **builders** are files which define functions that build payloads
    - **validators** are files which define request schemas that are enforced by micro-joi
  - **app.js** is the entry point to the app. Micro looks for this file to run the service. It is also where micro plugins such as micro-cors and micro-boom are added to the app
  - **router.js** is where routes are defined. To create a route, you must define a method (get, post, put, patch, delete), a path (`/status`, `/echo`), and a handler function. Optionally, you can wrap the handler function in a micro-joi validator to enforce a request schema
  - **mocks** holds all mock data for testing

---

## Deployment

There are Dockerfiles for deployment. When you have your service ready to deploy, just `Docker build -t <TAG NAME> .` and you'll have your service image.

## Build tools

In order to reduce the time spent on code styling and formatting, I use [husky](https://github.com/typicode/husky), [lint-staged](https://github.com/okonet/lint-staged), and [prettier](https://github.com/prettier/prettier) to automatically format code on git commit hooks. This ensures consitency in code styling across services before it is checked in. If you'd prefer to not be surprised at the change in code format after git commits, there are [prettier plugins](https://github.com/prettier/prettier#editor-integration) available for most IDES that will format the code on save.

## Testing
Test files are placed alongside the files/functionalities that they test. All test files ending in .test.js to be picked up by the test runner by default.

I use [ava](https://github.com/avajs/ava) for testing. It leverages Asyc-await polyfilling to run tests concurrently, and it implements Jest's snapshots for simple response testing. One caveat for Ava is that you cannot nest tests into suites. This is because all tests are run concurrently.

## Test reporting

The reporting for ava's tests is handled by Istanbul through their CLI binary [nyc](https://github.com/istanbuljs/nyc). By default, I've set the reporting to text and html, so coverage reports will print in the console are available in an html file in the `/coverage` directory. For a full list of available reporting methods, look [here](https://github.com/istanbuljs-archived-repos/istanbul-reports/tree/master/lib). Configuration of nyc's reporting is found in the .nycrc file 

## Logging

I use [winston](https://github.com/winstonjs/winston) for logging
