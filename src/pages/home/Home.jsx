import React,{useState} from 'react'
import Header from "../../components/header/Header"
import axios from "axios"


const APP_ID="bc371d7b"
const APP_KEY= "e020d4b08e7270a850c28fb6ca8b3fba"

const Home = () => {
  const [query, setQuery] = useState("")
  const mealTypes=["Breakfast", "Lunch", "Dinner","Snack", "TeaTime"]
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase())
  const [food, setFood] = useState();
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData= async ()=>{
    if(query) {
    const result = await axios.get(url);
    console.log(result);
    setFood(result.data.hits)
  } else {
    console.log("please fill the form");
  }
  }

  return (
    <div>
      <Header setQuery={setQuery}
      getData={getData}
      mealTypes={mealTypes}
      setMeal={setMeal}/>

    </div>
  )
}

export default Home