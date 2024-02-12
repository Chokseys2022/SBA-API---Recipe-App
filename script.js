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
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  // Define a function to handle the response
  xhr.onreadystatechange = function () {
    // Check if the request is done
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Check if the request was successful
      if (xhr.status === 200) {
        // Parse the JSON response
        const res = JSON.parse(xhr.responseText);
        // Check if there are results
        if (res.results.length > 0) {
          // Get the first result
          const result = res.results[0];
          // Get the recipe ID
          const recipeId = result.id;
          // Get the output div element
          const outputDiv = document.getElementById("output");
          // Set the HTML content of the output div
          outputDiv.innerHTML = `
                      <div class='result' data-recipe-id='${recipeId}'>
                          <h3>${result.title}</h3>
                          <img src='${res.baseUri}${result.image}' width='400'>
                          <div class='ready-in'>Cooking time: ${result.readyInMinutes} minutes</div>
                      </div>
                  `;
          // Add event listener to the source button
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
      } else {
        // Log error message if request was unsuccessful
        console.error("Error fetching recipe:", xhr.statusText);
      }
    }
  };
  // Open a GET request with the specified URL
  xhr.open(
    "GET",
    `https://api.spoonacular.com/recipes/search?apiKey=83391e00768640b29c383a671ab06380&query=${query}`
  );
  // Send the request
  xhr.send();
}

// Function to fetch recipe source
function getSource(recipeId) {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  // Define a function to handle the response
  xhr.onreadystatechange = function () {
    // Check if the request is done
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Check if the request was successful
      if (xhr.status === 200) {
        // Parse the JSON response
        const res = JSON.parse(xhr.responseText);
        // Open recipe source URL in new tab
        window.open(res.sourceUrl, "_blank");
      } else {
        // Log error message if request was unsuccessful
        console.error("Error fetching recipe source:", xhr.statusText);
      }
    }
  };
  // Open a GET request with the specified URL
  xhr.open(
    "GET",
    `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=83391e00768640b29c383a671ab06380`
  );
  // Send the request
  xhr.send();
}
