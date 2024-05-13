const express = require('express');
const axios = require('axios');
const moment = require('moment');
const querystring = require('querystring');
require('dotenv').config(); // Load environment variables from .env

const app = express();

app.get('/bikes', async (req, res) => {
  try {
    const location = req.query.location;
    const distance = req.query.distance || 10; // Default to 10 if distance is not provided
    const oneWeekAgo = moment().subtract(1, 'week').format('YYYY-MM-DD');
    const applicationId = process.env.BIKE_INDEX_APP_ID;
    const applicationSecret = process.env.BIKE_INDEX_APP_SECRET;

    const params = {
      page: 1, // Default to the first page
      per_page: 25, // Default to 25 results per page
      location: location,
      distance: distance,
      stolenness: 'stolen',
      dateStartStolen: oneWeekAgo,
    };

    const encodedParams = querystring.stringify(params);

    const response = await axios.get(`https://bikeindex.org/api/v3/search?${encodedParams}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${applicationId}:${applicationSecret}`).toString('base64')}`,
      },
    });

    const bikeData = response.data;
    res.json(bikeData);
  } catch (error) {
    console.error('Error fetching bike data:', error);
    res.status(500).json({ error: 'An error occurred while fetching bike data' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});