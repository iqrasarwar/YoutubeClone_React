# YoutubeClone_React

## Features

- Load most popular videos on page load
- on typing in search bar, fetch serach results(debounced)
- on clicking any video, fetch video by id and render it.
  
Demo at https://drive.google.com/file/d/1l6oImLRox0qnincQuHZFJp7S8xBU85Tu/view?usp=sharing

Deployed at https://64eb6e918c8014775b2c03dc--storied-bavarois-cdc084.netlify.app/

Api link https://developers.google.com/youtube/v3

For local setup, you need youtube data api key and client key. 

- Clone the repositry.
- Make a local .env file in root of your project and set following variables.
  ```
REACT_APP_YOUTUBE_DATA_API = 
REACT_APP_YOUTUBE_CLIENT_API =
```
- run ``` npm i ```
- run ``` npm start ```
