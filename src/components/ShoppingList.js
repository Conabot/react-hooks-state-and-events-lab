import React, { useState } from "react";
import Item from "./Item";
//import items from "./data/items";

function ShoppingList({items}) {
const[selectedCategory, setselected]= useState(items);

//console.log(selectedCategory)
 function handleChange(e) {
  setselected(e.target.value);

 }

const filteredItems = selectedCategory !== items
    ? items.filter(item => item.category === selectedCategory)
    : items;

console.log(filteredItems)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
