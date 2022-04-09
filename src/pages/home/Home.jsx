import React,{useState} from 'react'
import Header from "../../components/header/Header"
import axios from "axios"
import { MainContainer,ImgDiv,HomeImg } from './HomeStyles'
import homeSvg from "../../assets/home.svg"
import RecipeCardComp from "./RecipeCardComp"


const APP_ID="bc371d7b"
const APP_KEY= "223850f31659310a7ffc44e2576504ec	"

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

{food? (<MainContainer>
  {food.map((liste,index)=>(
    <RecipeCardComp key={index} recipe1={liste.recipe}/>
    ))}
  
      </MainContainer>):<ImgDiv>
      <HomeImg src="{homeSvg}"/>
      </ImgDiv>}

    </div>
    
  )
}

export default Home