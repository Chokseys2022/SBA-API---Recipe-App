import { apiKey } from './api.js';

export async function getSource(recipeId) {
  const url = `${baseUrl}/recipes/${recipeId}/information?apiKey=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  window.open(data.sourceUrl, "_blank");
}
