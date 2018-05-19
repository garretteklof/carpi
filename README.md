<img src="/public/images/carp.svg" height='200px' width='200px'/>

# carpi

An overly ambitious productivity management application that graphs time usage on a day-to-day basis.

[View live site](https://carpidiem.herokuapp.com/)

## Getting Started

For a local copy, clone the repo and from the command line: `yarn install && yarn run dev-server` (or use npm). You'll also need to run: `yarn start` from a separate command prompt to begin the Express server.

### Features

* Create, update, and delete diems (daily record of activities)
* Pick, sort, filter through diems, or search and combine diems by a specific activity.
* Graph by day, or range of days, or even graph by specific activities over time. (all graphs created with [Chart.js](https://www.chartjs.org/))
* Each account is secure and private with Google Authentication.

## Built With

carpi is a lightning fast productivity app that utilizes:

* Facebook's [React](https://github.com/facebook/react)
* [Redux](https://github.com/reactjs/redux)
* Google's [Firebase](https://firebase.google.com/)
* A very simple [Express](https://expressjs.com/) server for hosting on [Heroku](https://www.heroku.com/)
* Some styling with [Bulma](https://bulma.io/)
