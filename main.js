import { getRecipe } from './api.js';
import { getSource } from './source.js';

document.getElementById("searchButton").addEventListener("click", async () => {
  const query = document.getElementById("search").value;
  try {
    const res = await getRecipe(query);
    if (res.results.length > 0) {
      const result = res.results[0];
      const recipeId = result.id; // Store the recipe ID
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `
        <div class='result' data-recipe-id='${recipeId}'>
          <h1>${result.title}</h1>
          <img src='${res.baseUri}${result.image}' width='400'>
          <div class='ready-in'>Ready in ${result.readyInMinutes} minutes</div>
        </div>`;
      const sourceButton = document.getElementById("sourceButton");
      sourceButton.addEventListener("click", () => getSource(recipeId));
    } else {
      console.error("No recipe found for query:", query);
    }
  } catch (error) {
    console.error("Error fetching recipe:", error);
  }
});
