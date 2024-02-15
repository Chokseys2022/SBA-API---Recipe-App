//recipeFetcher.js- ContainsJ avaScript code for fetching and displaying recipes.
//************************************************************************//

// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Event listener for when the search button is clicked
  document
    .getElementById("searchButton")
    .addEventListener("click", function () {
      // Get the value from the search input field
      const query = document.getElementById("search").value;
      // Call the getRecipe function with the search query
      getRecipe(query);
    });
});

// Function to fetch recipe data from Spoonacular API
function getRecipe(query) {
  // Fetch data from Spoonacular API
  fetch(
    `https://api.spoonacular.com/recipes/search?apiKey=83391e00768640b29c383a671ab06380&query=${query}`
  )
    .then((response) => {
      // Check if the response is ok
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse JSON response
      return response.json();
    })
    .then((data) => {
      // Check for results
      if (data.results.length > 0) {
        // get frst  result
        const result = data.results[0];
        // Get recipe ID
        const recipeId = result.id;
        // get output div element
        const outputDiv = document.getElementById("output");

        // Set the HTML content output div
        outputDiv.innerHTML = `
          <div class='result' data-recipe-id='${recipeId}'>
            <h3>${result.title}</h3>
            <img src='${data.baseUri}${result.image}'>
            <div class='ready-in'>Cooking time: ${result.readyInMinutes} minutes</div>
              </div>
        `;

        // Add event listener - source button
        document
          .getElementById("sourceButton")
          .addEventListener("click", function () {
            // Call the getSource function with recipe ID
            getSource(recipeId);
          });
      } else {
        // Log error message if no results are found
        console.error("No recipe found for query:", query);
      }
    })
    .catch((error) => {
      // Log error message if fetch fails
      console.error("Error fetching recipe:", error);
    });
}

// Function to fetch recipe source
function getSource(recipeId) {
  // Fetch data from Spoonacular API
  fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=83391e00768640b29c383a671ab06380`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      //open recipe URL in new tab
      window.open(data.sourceUrl, "_blank");
    })
    .catch((error) => {
      console.error("Error fetching recipe source:", error);
    });
}

//**********************END CODE***************************************//
