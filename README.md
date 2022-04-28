# Northcoders Group Project - Part-Time Pet (Middleware API)

## Summary

Borrow a bear; lend a llama. A pet sharing app for mobile devices.

Part-Time Pet is the final project of my time at the Northcoders Bootcamp. Created alongside 4 other people within two weeks, the app aims to make pets accessible to everyone with the ability to lend out/loan pets to people local to you via our queried search and real-time messaging features.

In addition to this middleware API back end used to interact with our Firebase Firestore database there is a front end aspect that can be [found here](https://github.com/IanFindlay/nc_project).

## Why We Created This API

Separation of concerns was the driving principle behind the creation of this API. Built using Flutter, our front end could easily interact with our Firebase databases directly - and does so for authentication and real-time messaging - but the manipulation of data required for some of the features was better abstracted to a separate, dedicated API.

## Back End Tech-Stack

- Express - Framework used to create this RESTful API
- Mochai/Chai/Supertest - For testing each endpoint
- Axios - For seeding of the test Database
- Firebase - All of the data is stored in a non-relational Firestore database and all but the authentication and messaging, the latter of which required real-time functionality, is fetched and formatted here
- Heroku - Used to host the API

## Available Endpoints

- GET /api/users
- POST /api/users
- GET /api/users/:userid
- PATCH /api/users/:userid
- DELETE /api/users/:userid
- GET /api/users/:userId/pets
- POST /api/users/:userId/pets
- GET /api/users/:userId/reviews
- POST /api/users/:userId/reviews
- DELETE /api/users/:userId/reviews
- PATCH /api/pets
- GET /api/pets/:petId
- PATCH /api/pets/:petId
- DELETE /api/pets/:petId

## Video Demonstration

The infrastructure behind the project is not currently designed to be publicly accessible and may not always be hosted and/or maintained so the best way to see an example of Part-Time Pet in action is via the video on the [Northcoders website](https://northcoders.com/projects/april-2022/part-time-pet).
