import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo(({ onLoadIngredients }) => {
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const query =
      userInput.length === 0 ? "" : `?orderBy="title" &equalTo="${userInput}"`;
    fetch(
      "https://react-project-5c8fa-default-rtdb.firebaseio.com/ingredients.json" +
        query
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
        onLoadIngredients(loadedIngredients);
      });
  }, [userInput, onLoadIngredients]);
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
