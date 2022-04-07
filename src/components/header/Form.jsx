
import React from 'react'
import { FoodInput, FormContainer,Button,Select} from './HeaderStyles'

const Form = () => {
  return (
   <FormContainer> 
     <FoodInput type="text" placeholder='Search'/>
     <Button type="submit" >Search</Button>

     <Select name="mealTypes" id="mealTypes"></Select>
   </FormContainer>
  )
}

export default Form