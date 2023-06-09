import React, { useState } from "react";
import Item from "./Item";
//import { add } from "date-fns";

function ShoppingList({items}) {
const[selectedCategory, setSelectedCategory]= useState("All");


 function handleChange(e) {
  setSelectedCategory(e.target.value);

 }

const filteredItems = items.filter(item => {
  if (selectedCategory === "All"){
    return item
  } else{
    return  item.category === selectedCategory}});

console.log(filteredItems)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"  onChange={handleChange}>
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
