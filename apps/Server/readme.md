# Node.js APK Information Extraction Application

## Features
- APK information extraction using `aapt2`
- Data storage in MongoDB using `Mongoose` library
- Real-time communication with clients using `Socket.IO`

## Usage
The server imports the necessary libraries, creates an Express server with a Socket.IO instance, and listens for incoming connections. Upon receiving an "upload" event from the client-side containing an APK file, the server performs the following actions:

1. Saves the file to disk
2. Extracts the app's details using `aapt2 dump badging` command
3. Saves the extracted details to a text file
4. Reads the contents of the text file and extracts the necessary details
5. Uses MongoDB to store the extracted details.

## Installation
To install and run the application, follow these steps:

1. Clone this repository
2. Install Node.js and MongoDB on your system
3. Navigate to the project directory and run `npm install`
4. Start the server by running `npm start`
5. Open the application in your browser at `http://localhost:3000`

## License
This project is licensed under  Apache-2.0 license . See the LICENSE file for details.
