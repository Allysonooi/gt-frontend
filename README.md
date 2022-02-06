# Feedback Portal

This repo is for the UI of the Feedback portal.

### Installation

Ensure that the backend is already running on `localhost:8080`. (Setup https://github.com/Allysonooi/gt-engine)
Install the dependencies and devDependencies and start the server on `localhost:3000`.

```sh
yarn install
npm start
```

### View Submissions

Route `/view`

- Input email and contactNo
- Click submit button to fetch all submissions with that email and contact number
- Redux is used to manage state between components

### Submit single Submission

Route `/add`

- Input form details
- Click submit button to send submission to backend

### Incompleted Tasks

- Configure for Production
  - Setup proper .env for different environments
  - Add .env to .gitignore
  - Setup redux for sending of submissions
- Clean up code
  - Creation of form can use a better method. (Hint: Controller)
- Improve
  - Create Login Page
  - Add Authentication
- Write Unit tests
