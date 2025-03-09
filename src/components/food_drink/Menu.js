import React from "react";
import "./Menu.css";
import Food from "../../images/food.png";
import Dessert from "../../images/Dessert.png";

const foodData = [
  {
    title: "Appetizers",
    foods: ["Bruschetta", "Stuffed Mushrooms", "Garlic Bread"],
    foodImage: Food,
  },
  {
    title: "Main Courses",
    foods: ["Grilled Salmon", "Pasta Primavera", "Steak"],
    foodImage: Dessert,
  },
  {
    title: "Desserts",
    foods: ["Tiramisu", "Cheesecake", "Chocolate Lava Cake"],
    foodImage: Food,
  },
  {
    title: "Specials",
    foods: ["Lobster Risotto", "Duck Confit", "Wagyu Burger"],
    foodImage: Dessert,
  },
];

const drinkData = [
  { name: "Mojito" },
  { name: "Lemonade" },
  { name: "Iced Tea" },
  { name: "Red Wine" },
];

const Menu = () => {
  return (
    <section className="menu-section">
      <h1 className="menu-title-main">Meny</h1>

      {/* Food Section */}
      <div className="menu-grid">
        {foodData.map((category, index) => (
          <div key={index} className="menu-column">
            <h2 className="menu-title">{category.title}</h2>
            <div className="menu-items">
              {category.foods.map((food, idx) => (
                <p key={idx} className="menu-item">{food}</p>
              ))}
            </div>
            <img src={category.foodImage} alt={category.title} className="menu-image" />
          </div>
        ))}
      </div>

      {/* Drinks Section Header */}
      <h2 className="drinks-header">Drycker</h2>

      {/* Drinks Section */}
      <div className="drinks-grid">
        {drinkData.map((drink, idx) => (
          <div key={idx} className="drink-box">
            <p className="drink-name">{drink.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
