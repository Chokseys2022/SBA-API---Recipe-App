// Import the apiKey constant from the api.js file
import { apiKey } from './api.js';

// Define an asynchronous function named getSource which accepts a recipeId parameter
export async function getSource(recipeId) {
  // Construct the URL for fetching recipe information using template literals
  const url = `${baseUrl}/recipes/${recipeId}/information?apiKey=${apiKey}`;
  
  // Send a HTTP GET request to the constructed URL and wait for the response
  const response = await fetch(url);

  // Check if the response is not successful (status code not in the range 200-299)
  if (!response.ok) {
    // Throw an error with a message indicating the HTTP status code of the response
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Read the body of the response as JSON and wait for the JSON parsing to complete
  const data = await response.json();

  // Open a new browser window or tab with the URL specified by data.sourceUrl
  // The "_blank" argument ensures that the URL is opened in a new tab
  window.open(data.sourceUrl, "_blank");
}
