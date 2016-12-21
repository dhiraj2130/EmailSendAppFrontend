# EmailSendAppFrontend

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


ng generate interface emailmodel
ng generate component sendemail
 ng g service sendEmailService


some of validation build in UI are :
1. All the fields are mandatory. It is though needs to be confirmed, if subject and content are to be mandatory or
can be left with warning. alert-warning class can be used in this case.
2.Submit button is disabled till all fields are valid
3.validation for email is used from html5 forms features and is reflected with submit button is presses.
4. Max size of subject is 100 character and content is 500 character. No warning is displayed as of now, but can
be implemented.


4. Reset button is not yet ready
5. send email button in navigation bar is not working.
6. CORS is not implemented.


The application can be run on other port other than 4200 but as the server is configured for CORS on http://localhost:4200,
all the requests to server will fail