## APKINFO

### Project URLs

👉 [Frontend](https://apkinfo.tech)

👉 [Backend API](https://api.apkinfo.tech/pingme)

👉 [API Doc](https://documenter.getpostman.com/view/25817283/2s93RZLpEo)

## Description

APKINFO is a user-friendly web application that provides fundamental details to initiate the process of reverse engineering an Android application or get enthusiastic with the APK details without installing it on your device. The motivation behind building this project was to simplify the process of reverse engineering an APK and to make it more accessible to Android enthusiasts.

With APKINFO, you can extract essential details of an APK, such as the package name, version code, version name, minimum and target SDK version, permissions, activities, services, and more. The tool uses Google's Android Asset Packaging tool and Java Keytool to extract the required details.

What problem does it solve?

APKINFO solves the problem of reverse engineering an APK without installing it on your device. It saves time and effort by providing fundamental details that are essential for initiating the reverse engineering process. APKINFO can be used by security researchers, app developers, and Android enthusiasts who are interested in exploring the details of APKs.

### Installation Steps

1. Download the repository.
2. Install the dependencies for the frontend and backend by running the following command in the project root directory:

   ```
   npm install
   ```

3. Create a `.env` file in the `Client` directory and add the following variables:

   ```
   REACT_APP_AUTH0_DOMAIN="Your Auth0 Domain"
   REACT_APP_AUTH0_CLIENT_ID="Your Auth0 Client ID"
   REACT_APP_FETCH_URL=http://localhost:8000/apkinfo
   REACT_APP_SERVER_SOCKET_URL=http://localhost:8000/
   ```

4. Add your MongoDB URL in `enum.js` present inside `Server` folder.
5. Start the backend server by running the following command in your frontend and backend directory:

   ```
   npm start
   ```

6. Open your web browser and go to `http://localhost:3000` to view the app.

## Usage

![Loading ..](https://res.cloudinary.com/dhdzwkwqg/image/upload/v1681280475/ezgif.com-video-to-gif_1_kmsi0h.gif)

## Credits

Thanks to my mentors @PatelNeelMahesh and @charupraneeth

##

| Content                                         |
| ----------------------------------------------- |
| **Back-end**                                    |
| NodeJs - setting up a project with package.json |
| NodeJS Modules                                  |
| fs Module                                       |
| Streams and Buffers                             |
| NPM                                             |
| Nodemon                                         |
| Events in Nodejs                                |
| Express JS - first route                        |
| ExpressJS - additional routes                   |
| Template Engines                                |
| Partials                                        |
| Middlewares                                     |
| **Databases**                                   |
| MongoDB - Installations and Basics              |
| Mongoose                                        |
| CRUD Operations                                 |
| Simple API - CRUD Operations using NodeJs       |
| Schemas and Models                              |
| Indexes                                         |
| Aggregations                                    |
| **Front-end and Full Stack**                    |
| Low-fid design for your application             |
| High-fid design for your application            |
| ReactJS app initialization                      |
| Application components created                  |
| Application deployed                            |
| IDE Setup                                       |
| NodeJs REPL                                     |
| Using the public folder to serve files          |
| Postman Use for Testing                         |
| Authentication                                  |
| Deployment                                      |
| **Extra Topics**                                |
| dotenv                                          |
| Google OAuth                                    |
| React Router                                    |
