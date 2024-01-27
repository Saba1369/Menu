const FoodList = [
  {
    id: 1,
    title: "bosco pizza",
    img: "assets/Bosco.jpeg",
    category: "pizza",
    price: 21,
    desc: "Tomato sauce, fresh mozzarella, cremini mushrooms, fontina",
  },
  {
    id: 2,
    title: "cheese burger",
    img: "assets/cheese-burger.jpg",
    category: "burgers",
    price: 19,
    desc: "A hamburger with a slice of melted cheese on top of the meat patty",
  },
  {
    id: 3,
    title: "beet salad",
    img: "assets/Beet-Salad.jpg",
    category: "salads",
    price: 11,
    desc:
      "Red beets, goat cheese, arugula, endive & pistachio lemon honey dressing",
  },
  {
    id: 4,
    title: "cheese fries",
    img: "assets/cheese-fries.jpg",
    category: "snacks",
    price: 6,
    desc:
      "crispy french fries topped two types of melted cheese, smoky bacon and fresh herbs",
  },
  {
    id: 5,
    title: "americano",
    img: "assets/Americano.jpg",
    category: "drinks",
    price: 3,
    desc: "Espresso, Water",
  },
  {
    id: 6,
    title: "Burrata pizza",
    img: "assets/Burrata.jpeg",
    category: "pizza",
    price: 25,
    desc: "Tomato Sauce, burrata, garlic, basil",
  },
  {
    id: 7,
    title: "chicken burger",
    img: "assets/chicken-burger.jpeg",
    category: "burgers",
    price: 17,
    desc: "Food serves as a common language that links us all in a world",
  },
  {
    id: 8,
    title: "double burger",
    img: "assets/double-burger.png",
    category: "burgers",
    price: 25,
    desc: "Food serves as a common language that links us all in a world",
  },
  {
    id: 9,
    title: "french fries",
    img: "assets/french-fries.jpg",
    category: "snacks",
    price: 6,
    desc: "Tomato sauce, fresh mozzarella, cremini mushrooms, fontina",
  },
  {
    id: 10,
    title: "Spinach Salad",
    img: "assets/spinach-salad.jpg",
    category: "salads",
    price: 11,
    desc: "A hamburger with a slice of melted cheese on top of the meat patty",
  },
  {
    id: 11,
    title: "green salad",
    img: "assets/green-salad.jpg",
    category: "salads",
    price: 10,
    desc:
      "Red beets, goat cheese, arugula, endive & pistachio lemon honey dressing",
  },
  {
    id: 12,
    title: "turkey burger",
    img: "assets/turkey-burger.jpg",
    category: "burgers",
    price: 26,
    desc:
      "crispy french fries topped two types of melted cheese, smoky bacon and fresh herbs",
  },
  {
    id: 13,
    title: "margherita pizza",
    img: "assets/Jersey-Margherita.jpeg",
    category: "pizza",
    price: 23,
    desc: "Espresso, Water",
  },
  {
    id: 14,
    title: "juice",
    img: "assets/Juice.jpg",
    category: "drinks",
    price: 5,
    desc: "Tomato Sauce, burrata, garlic, basil",
  },
  {
    id: 15,
    title: "La Rossa pizza",
    img: "assets/La-Rossa.jpeg",
    category: "pizza",
    price: 20,
    desc: "Food serves as a common language that links us all in a world",
  },
  {
    id: 16,
    title: "latte",
    img: "assets/latte.webp",
    category: "drinks",
    price: 7,
    desc: "Food serves as a common language that links us all in a world",
  },
  {
    id: 17,
    title: "tea",
    img: "assets/tea.jpg",
    category: "drinks",
    price: 2,
    desc:
      "crispy french fries topped two types of melted cheese, smoky bacon and fresh herbs",
  },
  {
    id: 18,
    title: "Pepperoni pizza",
    img: "assets/Pepperoni.jpeg",
    category: "pizza",
    price: 25,
    desc: "Espresso, Water",
  },
  {
    id: 19,
    title: "panna pizza",
    img: "assets/panna.jpeg",
    category: "pizza",
    price: 25,
    desc: "Tomato Sauce, burrata, garlic, basil",
  },
];

function AddButtons() {
  let buttons = ["all"];
  const MenuBTN = document.getElementById("BTNs");
  MenuBTN.innerHTML = `<button class="btn" id="${buttons[0]}">${buttons[0]}</button>`;
  FoodList.forEach((item) => {
    if (item && item.category && !buttons.includes(item.category)) {
      buttons.push(item.category);
      MenuBTN.innerHTML += `<button class="btn" id="${item.category}">${item.category}</button>`;
    }
  });
}

function AddFoods(LisT) {
  const FOODS = document.getElementById("foods");
  FOODS.innerHTML = "";
  LisT.forEach((item) => {
    FOODS.innerHTML += `<div class="food">
        <img class="food-img" src=${item.img} alt="${item.title}" />
        <div class="description">
          <div class="name-price">
            <h2 class="name">${item.title}</h2>
            <span class="price">$${item.price}</span>
          </div>
          <p class="about">${item.desc}</p>
        </div>
      </div>`;
  });
}

function ChangeBtnColor(Btn, BGColor, TColor) {
  Btn.style.backgroundColor = BGColor;
  Btn.style.color = TColor;
}

function AddButtonTask() {
  document.querySelectorAll(".btn").forEach((item) => {
    item.addEventListener("click", function () {
      document
        .querySelectorAll(".btn")
        .forEach((item) => ChangeBtnColor(item, "#132043", "#D80032"));
      ChangeBtnColor(item, "#D80032", "#132043");
      const catType = item.getAttribute("id");
      if (catType === "all") {
        AddFoods(FoodList);
      } else {
        const foods = FoodList.filter((item) => item.category === catType);
        AddFoods(foods);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  AddButtons();
  AddFoods(FoodList);
  AddButtonTask();
});
