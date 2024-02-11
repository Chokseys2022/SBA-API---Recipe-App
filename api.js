// api.js
const apiKey = "83391e00768640b29c383a671ab06380";

export async function getRecipe(query) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${query}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }
  const data = await response.json();
  if (data.results.length > 0) {
    return data.results[0];
  } else {
    throw new Error("No recipe found");
  }
}

export async function getSource(recipeId) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch recipe source");
  }
  const data = await response.json();
  return data.sourceUrl;
}
