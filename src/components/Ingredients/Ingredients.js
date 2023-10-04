import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [Ingredients, setIngredients] = useState([]);

  const addIngredientsHandler = (value) => {
    console.log("value", value);
    setIngredients((prevIng) => {
      return [...prevIng, { id: Math.random().toString(), ...value }];
    });
    console.log(Ingredients);
  };
  return (
    <div className="App">
      <IngredientForm addIngtrdientsProps={addIngredientsHandler} />

      <section>
        <Search />
        <IngredientList
          ingredientsProps={Ingredients}
          onRemoveItem={() => {}}
        />
      </section>
    </div>
  );
}

export default Ingredients;
