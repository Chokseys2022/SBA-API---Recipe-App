# Recipe Search Web Application - connecting to an API

This is a simple web application that allows users to search for recipes using a keyword. It fetches recipe data from the Spoonacular API and displays the results on the webpage. Users can also view the source of the recipe by clicking on the "Get the recipe" button. 

## How to Use this application:

1. Enter a keyword related to the recipe you are looking for in the search input field.
2. Click on the "Search" button to retrieve recipes matching the keyword.
3. The first matching recipe will be displayed along with its title, image, and cooking time.
4. Click on the "Get the recipe" button to view the source of the recipe in a new tab.

## Built with

- HTML
- CSS
- JavaScript

## File Structure

- `index.html`: Contains HTML structure of the web application.
- `styles.css`: Contains CSS styles for the web application.
- `script.js`: Contains JavaScript for fetching and displaying recipes.
- `api.js`: Contains functions for getting recipe data from the Spoonacular API.
- `source.js`: Contains functions for getting the source of a recipe.
- `README.md`: Contains information about the project.

## Acknowledgement

- **Spoonacular API - https://spoonacular.com/food-api**

## Functions:
Use of Fetch API to communicate with the Spoonacular API.
User Interaction with the API where users can input a query (presumably a recipe name) to fetch recipes from the Spoonacular API
GET Requests for Data Retrieval: retrieve recipe data from the Spoonacular API
Enable User Manipulation with POST sends a POST request to the Spoonacular API
Promises and async/await Syntax for handling asynchronous operations, particularly when fetching data
Organized into Multiple Module Files
