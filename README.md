# Taxi-map

This app displays an interactive map centered on the nearest Splyt office to the user's location, with the ability to change locations. Shows the recent locations of taxis in the local area with a refresh interval of 5 seconds. Features a UI slider that allows the user to change the number of taxis that appear.

### Prerequisites

node version: 14.17.1

## Running app locally

Add api key to components/Map.tsx file on line 22. This key can be created as specified [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

### Install dependencies
- Install dependencies in root of app:
    ```
    npm install
    ```
- Install dependencies in client directory:
    ```
    cd client
    npm install
    ```

### Run application

    ```
    npm start
    ```

### Run tests

    ```
    cd client
    npm start
    ```
    
    Open http://localhost:3000 to view in the browser.
