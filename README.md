
# MSMOMS Lab Content Editor

## Project Overview

This project is a small React application created for my
Capstone Research Milestone. It is a prototype of the
content editing functionality planned for our team's
MSMOMS Lab research website.

The application allows an administrator to edit research
project information, preview changes, and save content.

## Technologies Used

- React: Builds the interactive user interface.
- JavaScript: Handles user input and application logic.
- Vite: Sets up and runs the React application.
- HTML/CSS: Provides the page structure and styling.
- npm: Installs and manages project dependencies.
- localStorage: Saves information in the browser.

## Features

- Edit a research project title.
- Edit a research project description.
- Preview the research content.
- Save changes and keep them after refreshing the page.

## How to Run

1. Install Node.js.
2. Open the project folder in a terminal.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the application.
5. Open the localhost URL shown in the terminal.

## Technology Research

I chose React because it allows me to build interactive
website components and update the page when users enter
information.

Vite made setting up the React project simple and provides
a development server that updates as I make changes.

I used npm to install and manage the dependencies needed
to run the project. The package.json file lists these
dependencies, while package-lock.json records the installed
dependency versions.

For this prototype, I used localStorage instead of a
database. This keeps the application simple while still
allowing information to be saved between browser sessions.

One limitation is that localStorage only saves data in the
current browser. A full CMS would need a backend, database,
and user authentication to support multiple administrators.

## Future Improvements

The full MSMOMS Lab website could include researcher
profiles, publications, research projects, and an
administrative dashboard.
