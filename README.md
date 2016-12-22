# EmailSendAppFrontend

This project was generated with angular-cli

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build
Run `ng build` to build the project.
The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` or 'npm test to' execute the unit tests

Following commands are used to generate components:
ng generate interface emailmodel
ng generate component sendemail
ng g service sendEmailService


some of validation build in UI are :

1. All the fields are mandatory. It is though needs to be confirmed, if subject and content are to be mandatory or
can be left with warning. alert-warning class can be used in this case.

2.Submit button is disabled till all fields are valid.

3.validation for email is used from html5 forms features and is reflected with submit button is pressed.

4. Max size of subject is 100 character and content is 500 character. No warning is displayed as of now, but can
be implemented.

5. CORS implemented : The application can be run on other port other than 4200 but as the server
is configured for CORS on http://localhost:4200, all the requests to server will fail

6. No login facility added.

7. Before running the web application, API keys need to be configured in server side.

backend api used is

http://localhost:8000/mail
it can be reconfigured in config folder

one test case is in pending