# Bike Index API Project

This project is a Node.js API that allows you to retrieve data about stolen bikes from the Bike Index API. The Bike Index is a non-profit organization that maintains a database of stolen and recovered bicycles, and their API provides access to this data.

## Features

- Fetches a list of stolen bikes registered in a given location within the past week.
- Supports specifying the search radius (distance) from the provided location.
- Authenticates with the Bike Index API using your application ID and secret.
- Uses environment variables to store sensitive information (application ID and secret).
- Includes Jest unit tests for testing the API functionality.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v12 or later)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal or command prompt.
3. Run `npm install` to install the required dependencies.
4. Create a `.env` file in the project directory and add the following lines, replacing `BIKE_INDEX_APP_ID` and `BIKE_INDEX_APP_SECRET` with your actual Bike Index application credentials:
5. Run `node app.js` to start the server.

The server will start running on `http://localhost:3000`.

## API Endpoints

### GET /bikes

Retrieves a list of stolen bikes registered in a given location within the past week.

**Query Parameters**

- `location` (required): The location to search for stolen bikes (e.g., "New York City").
- `distance` (optional): The search radius in miles from the provided location (defaults to 10 if not provided).

**Example Request**
- http://localhost:3000/bikes?location=New%20York%20City&distance=20

**Example Response**

```json
[
  {
    "id": 1234,
    "stolen": true,
    "location": "New York, NY",
    "date_stolen": "2023-04-01"
  },
  {
    "id": 5678,
    "stolen": true,
    "location": "Brooklyn, NY",
    "date_stolen": "2023-04-05"
  }
]