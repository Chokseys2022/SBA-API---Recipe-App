const apiKey = "83391e00768640b29c383a671ab06380";
const baseUrl = "https://api.spoonacular.com";

export async function getRecipe(query) {
  const url = `${baseUrl}/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function postRequest(data) {
  const url = `${baseUrl}api.spoonacular.com/recipes/complexSearch`; // Replace with your actual POST endpoint
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add other headers if necessary
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
