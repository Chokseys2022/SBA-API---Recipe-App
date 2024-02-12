// Importing the getRecipe function from api.js
import { getRecipe } from "./api.js";
// Importing the getSource function from source.js
import { getSource } from "./source.js";

// Adding click event listener to search button
document.getElementById("searchButton").addEventListener("click", async () => {
  // Get value from search input field
  const query = document.getElementById("search").value;
  // Try block to catch errors
  try {
    // Fetch recipes and wait for response
    const res = await getRecipe(query);
    if (res.results.length > 0) {
      const result = res.results[0];
      // Get recipe ID
      const recipeId = result.id;
      // Get output div
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `
        <div class='result' data-recipe-id='${recipeId}'>
          <h1>${result.title}</h1>
          <img src='${res.baseUri}${result.image}' class='recipe-image'>
          <div class='ready-in'>Ready in ${result.readyInMinutes} minutes</div>
        </div>`;
      
      // Get source button
      const sourceButton = document.getElementById("sourceButton");
      // Add event listener to source button
      sourceButton.addEventListener("click", () => getSource(recipeId));
    } else {
      // If no results are found
      // Log error message
      console.error("No recipe found for query:", query);
    }
  } catch (error) {
    // Catch any errors
    // Log error message
    console.error("Error fetching recipe:", error);
  }
});
