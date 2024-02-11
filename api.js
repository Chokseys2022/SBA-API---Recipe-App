import { getRecipe, getSource } from './api.js';

document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('search').value;
    try {
        const result = await getRecipe(query);
        displayRecipe(result);
    } catch (error) {
        console.error("Error fetching recipe:", error);
    }
});

document.getElementById('sourceButton').addEventListener('click', async () => {
    try {
        const recipeId = document.querySelector('.result').dataset.recipeId;
        const sourceUrl = await getSource(recipeId);
        window.open(sourceUrl, "_blank");
    } catch (error) {
        console.error("Error fetching recipe source:", error);
    }
});

function displayRecipe(result) {
    const outputDiv = document.getElementById("output");
    if (result) {
        outputDiv.innerHTML = `
            <div class='result' data-recipe-id='${result.id}'>
                <h1>${result.title}</h1>
                <img src='${result.image}' width='400'>
                <div class='ready-in'>Ready in ${result.readyInMinutes} minutes</div>
            </div>`;
    } else {
        outputDiv.innerHTML = "<p>No recipe found</p>";
    }
}
