import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [Ingredients, setIngredients] = useState([]);

  const addIngredientsHandler = (value) => {
    fetch(
      "https://react-project-5c8fa-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify({ value }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setIngredients((prevIng) => {
          return [...prevIng, { id: responseData.name, ...value }];
        });
      });
  };

  const removeItemHadler = (Itemid) => {
    setIngredients((pervItems) =>
      pervItems.filter((item) => item.id !== Itemid)
    );
  };

  return (
    <div className="App">
      <IngredientForm addIngtrdientsProps={addIngredientsHandler} />

      <section>
        <Search />
        <IngredientList
          ingredientsProps={Ingredients}
          onRemoveItem={removeItemHadler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
