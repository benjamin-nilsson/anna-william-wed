import React from "react";
import "./Menu.css";
import Food from "../../images/food.png";
import Dessert from "../../images/Dessert.png";

const foodData = [
  {
    title: "Förrätt",
    foods: ["Meze (ost, salami, kycklingfilé, feta ost, nötter)",],
    foodImage: Food,
  },
  {
    title: "Huvudrätt",
    foods: ["Shopska sallad & Dressing, Grön sallad med hallomi & granat äpple, Rödbetssallad, Bulgarisk potatissallad", "Västerbottenpaj", "Grillad kycklingfilé med potatisgratäng", "Fläskfilé marinerat med vitlök tillsammans med kantareller", "Kallrökt lax & kokt potatis", "Brunsås, Vingegretssås, honungsenapsdressing"],
    foodImage: Dessert,
  },
  {
    title: "Dessert",
    foods: ["Glutenfri brownie", "Fruktbricka", "Tårtbuffé", "Créme bulle"],
    foodImage: Food,
  },
];

const drinkData = [
  { name: "Alkohållfri Champagne" },
  { name: "Herrljunga Cider" },
  { name: "Fläder Saft" },
  { name: "Rakija" },
  { name: "Öl" },
  { name: "Fanta & Coca Cola" }
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
