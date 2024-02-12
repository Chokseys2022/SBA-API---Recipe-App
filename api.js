//api.js: Contains functions for fetching recipe data from the Spoonacular API.
//*****************************************************************************

// Defining Spoonacular API key
const apiKey = "83391e00768640b29c383a671ab06380";
// Define the base URL for the Spoonacular API
const baseUrl = "https://api.spoonacular.com";

// Async funct to fetch recipes
export async function getRecipe(query) {
  // url to fetch recipes
  const url = `${baseUrl}/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;
  // Fetch data from url
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // Return JSON data
  return response.json();
}

//Async funct for POST request

export async function postRequest(data) {
  const url = `${baseUrl}/api.spoonacular.com/recipes/complexSearch`;
  // Fetch data
  const response = await fetch(url, {
    //Set request method to POST
    method: "POST",
    //request headers
    headers: {
      //set content type to JSON
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  //return JSON data
  return response.json();
}
// **********************************END CODE***********************************//
