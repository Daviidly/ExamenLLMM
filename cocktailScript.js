const grid = document.getElementById("cocktailGrid");

// Carga inicial de cócteles al azar
fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
  .then(res => res.json())
  .then(data => {
    data.drinks.slice(0, 12).forEach(drink => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
        <h3><a href="cocktails.html?id=${drink.idDrink}">${drink.strDrink}</a></h3>
        <p>10$</p>
        `;

      grid.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching cocktails:", error);
    grid.innerHTML = "<p>Failed to load cocktails. 🍸</p>";
  });
