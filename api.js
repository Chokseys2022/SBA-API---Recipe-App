// Define the Spoonacular API key
const apiKey = "83391e00768640b29c383a671ab06380";
// Define the base URL for the Spoonacular API
const baseUrl = "https://api.spoonacular.com";

// Asynchronous function to fetch recipes
export async function getRecipe(query) {
  // Construct the URL for fetching recipes
  const url = `${baseUrl}/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;
  // Fetch data from the constructed URL
  const response = await fetch(url);
  // Check if the response is not OK
  if (!response.ok) {
    // Throw an error if response is not OK
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // Return JSON data
  return response.json();
}

// Asynchronous funct for POST request

export async function postRequest(data) {
  const url = `${baseUrl}/api.spoonacular.com/recipes/complexSearch`;
  // Fetch data
  const response = await fetch(url, {
    // Set request method to POST
    method: "POST",
    // Define request headers
    headers: {
      // Set content type to JSON
      "Content-Type": "application/json",
    },
    // Convert data to JSON string
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // Return JSON data
  return response.json();
}
