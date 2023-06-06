import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
/* import { set } from "date-fns";
import is from "date-fns/esm/locale/is/index.js"; */

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = false ? "App dark" : "App light"
  const [isDarkMode, setDarkMode] = useState(false)
  //console.log(isDarkMode);
  function handleClick(e){
    setDarkMode(!isDarkMode)
    
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
