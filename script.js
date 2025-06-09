  const data = {
    desserts: [
      { title: "Cookie", text: "Wheat, cocoa beans, milk", img:"cookie.webp"},
      { title: "Apple", text: "Directly dropped from an oak tree leaves", img:"apple.webp" },
      { title: "Watermelon", text: "just watermelon", img:"watermelon.webp"},
      { title: "Pie", text: "Pumpking, eggs?", img:"pie.webp" }
    
    ],
    main: [
      { title: "Chicken", text: "Cooked Chicken", img:"chicken.webp" },
      { title: "Steak", text: "Cooked Steak", img:"steak.webp" },
      { title: "Rabbit Stew", text: "Rabbit and other things", img:"stew.webp" },
    ],
    appetizers: [
      { title: "Golden Apple", text: "Gives you regeneration ans strenght", img: "gap.webp" },
      { title: "Bread", text: "3 of wheat in row", img: "bread.webp" }
    ]
  };

  document.getElementById("goCocktails").addEventListener("click", () => {
  window.location.href = "cocktails.html";
});



  const container = document.querySelector(".grid");
  const buttons = document.querySelectorAll(".menuButton");

  function renderCards(category) {
    container.innerHTML = ""; // Limpia el grid
    data[category].forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<img src="${item.img}" alt="${item.title}"> <h3>${item.title}</h3><p>${item.text}</p> <button> Order </button>`;
      container.appendChild(card);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Actualiza estilo de botones
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Carga las tarjetas correspondientes
      const category = btn.getAttribute("data-category");
      renderCards(category);
    });
  });

  // Carga inicial
  renderCards("appetizers");
