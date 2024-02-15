// recipeSource.js - Contains functions for getting the source of a recipe.
//*******************************************************************//

// Import apiKey from api.js
import { apiKey } from "./recipeApi.js";

// Async funct to get recipe source
export async function getSource(recipeId) {
  const url = `${baseUrl}/recipes/${recipeId}/information?apiKey=${apiKey}`; // Construct URL for fetching recipe information

  // Fetch data
  const response = await fetch(url);
  // Check for errors
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // Read the JSON data from the response
  const data = await response.json();
  // Open recipe source URL in new tab
  window.open(data.sourceUrl, "_blank");
}

//*******************************END CODE***********************************************//
