import { getRecipe } from "./api.js"; // Importing the getRecipe function from api.js
import { getSource } from "./source.js"; // Importing the getSource function from source.js

document.getElementById("searchButton").addEventListener("click", async () => {
  // Adding an event listener to the searchButton for click events
  const query = document.getElementById("search").value; // Getting the value from the search input field
  try {
    // Trying to execute the following code block
    const res = await getRecipe(query); // Calling the getRecipe function with the query and awaiting the response
    if (res.results.length > 0) {
      // Checking if there are results returned
      const result = res.results[0]; // Getting the first result
      const recipeId = result.id; // Storing the recipe ID
      const outputDiv = document.getElementById("output"); // Getting the output div
      outputDiv.innerHTML = ` // Setting the HTML content of the output div
        <div class='result' data-recipe-id='${recipeId}'>
          <h1>${result.title}</h1> // Displaying the title of the recipe
          <img src='${res.baseUri}${result.image}' width='400'> // Displaying the image of the recipe
          <div class='ready-in'>Ready in ${result.readyInMinutes} minutes</div> // Displaying the time to prepare the recipe
        </div>`;
      const sourceButton = document.getElementById("sourceButton"); // Getting the sourceButton
      sourceButton.addEventListener("click", () => getSource(recipeId)); // Adding an event listener to the sourceButton to get the recipe source
    } else {
      // If no results are found
      console.error("No recipe found for query:", query); // Logging an error message
    }
  } catch (error) {
    // Catching any errors that occur in the try block
    console.error("Error fetching recipe:", error); // Logging an error message
  }
});
