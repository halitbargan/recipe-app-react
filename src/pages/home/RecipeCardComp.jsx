import React from 'react'
import {RecipeCard,RecipeHeader, RecipeImage} from "./HomeStyles"

const RecipeCardComp = ({recipe1}) => {
  return (
    <RecipeCard>
      <RecipeHeader>
        {recipe1.label}
      </RecipeHeader>
      <RecipeImage src={recipe1.image}/>

      <Button></Button>
    </RecipeCard>
  )
}

export default RecipeCardComp