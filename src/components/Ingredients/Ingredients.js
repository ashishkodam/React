import React, { useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [Ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-project-5c8fa-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].value.title,
            amount: responseData[key].value.amount,
          });
        }
        setIngredients(loadedIngredients);
      });
  }, []);

  useEffect(() => {
    console.log("render");
  }, [Ingredients]);
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

  const searchFilterHandler = (userSearchValue) => {
    setIngredients(userSearchValue);
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
        <Search onLoadIngredients={searchFilterHandler} />
        <IngredientList
          ingredientsProps={Ingredients}
          onRemoveItem={removeItemHadler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
