$(document).ready(function () {
  $("#searchButton").click(function () {
    var query = $("#search").val();
    getRecipe(query);
  });
});

function getRecipe(query) {
  $.ajax({
    url:
      "https://api.spoonacular.com/recipes/search?apiKey=83391e00768640b29c383a671ab06380&query=" +
      query,
    success: function (res) {
      if (res.results.length > 0) {
        var result = res.results[0];
        var recipeId = result.id; // Store the recipe ID
        $("#output").html(
          "<div class='result' data-recipe-id='" +
            recipeId +
            "'><h1>" +
            result.title +
            "</h1><img src='" +
            res.baseUri +
            result.image +
            "' width='400'><div class='ready-in'>Cooking time: " +
            result.readyInMinutes +
            " minutes</div></div>"
        );

        // Attach click event handler for source button after recipe is fetched and displayed
        $("#sourceButton").click(function () {
          getSource(recipeId); // Pass the recipeId to the getSource function
        });
      } else {
        console.error("No recipe found for query:", query);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error fetching recipe:", error);
    },
  });
}

function getSource(recipeId) {
  $.ajax({
    url:
      "https://api.spoonacular.com/recipes/" +
      recipeId +
      "/information?apiKey=83391e00768640b29c383a671ab06380",
    success: function (res) {
      window.open(res.sourceUrl, "_blank");
    },
    error: function (xhr, status, error) {
      console.error("Error fetching recipe source:", error);
    },
  });
}
