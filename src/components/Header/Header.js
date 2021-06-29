import "./Header.css";
import { useState } from "react";
import Axios from "axios";
import { APP_ID } from "../../App";
import { APP_KEY } from "../../App";
import ContentCard from "../Content/ContentCard";

import "../Content/Content.css";

function Header() {
  const [timeoutId, settimeoutId] = useState();
  const [recipeList, updatedRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log("response is ", response);
    updatedRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 1000);
    settimeoutId(timeout);
  };
  return (
    <>
      <header className="header">
        Recipe
        <input
          type="search"
          className="search"
          placeholder="Search..."
          onChange={onTextChange}
        />
      </header>
      <div className="content">
        {recipeList.length &&
          recipeList.map((recipeObj, index) => (
            <ContentCard key={index} recipeObj={recipeObj.recipe} />
          ))}
      </div>
    </>
  );
}

export default Header;
