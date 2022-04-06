import React from "react";
import RecipeCard from "./RecipeCard";
import {useEffect,useState} from 'react'
import axios from "axios";
const Home = () => {
    const [recipe, setRecipe] = useState([])
    useEffect(() => {
        getFood();
    }, [])
    const APP_ID = "cf9b1911";
    const APP_KEY = "595aeb2b3a15df30d34b8d8aa5c2cb7b";
    const meal = "breakfast";
    let query = "pizza"
    const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
    const getFood = async() => {
        const {data} = await axios.get(url);
        // console.log(data.hits);
        setRecipe(data?.hits);
    }
    // console.log(recipe);
  return (
    <div>
      <h1>Food App</h1>
      <div>
        <input type="text" name="" id="" placeholder="Search " />
        <button>Search</button>
        <select name="meals" id="meals">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Tea Time</option>
        </select>
        </div>
        <div>
                {
                (recipe.length > 0)
                 && (
                        <div>
                             {recipe.map((osman,index) => (
                               <div key={index}>
                                  <RecipeCard recipe={osman}/>
                                </div>
                            ))}
                        </div>
                    )
                    }
            </div>
    </div>
  );
};
export default Home;
