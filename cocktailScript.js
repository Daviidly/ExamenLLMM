const grid = document.getElementById("cocktailGrid");
const searchInput = document.getElementById("search");

let cocktails = [];

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
  .then(res => res.json())
  .then(data => {
    cocktails = data.drinks.slice(0, 12);
    renderCocktails(cocktails);
  })
  .catch(error => {
    console.error("Error fetching cocktails:", error);
    grid.innerHTML = "<p>Failed to load cocktails. 🍸</p>";
  });

function renderCocktails(list) {
  grid.innerHTML = "";
  list.forEach(drink => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
      <h3><p>${drink.strDrink}</p></h3>
      <p>10$</p>
    `;
    grid.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = cocktails.filter(drink =>
    drink.strDrink.toLowerCase().includes(query)
  );
  renderCocktails(filtered);
});
