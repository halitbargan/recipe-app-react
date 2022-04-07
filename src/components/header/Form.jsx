
import React from 'react'
import { FoodInput, FormContainer,Button,Select} from './HeaderStyles'

const Form = ({setQuery,setMeal,getData,mealTypes}) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    getData();
  }
  return (
   <FormContainer onSubmit={handleSubmit}> 
     <FoodInput type="text" placeholder='Search'
     onChange={(e)=>setQuery(e.target.value)} />
     <Button type="submit" >Search</Button>

     <Select 
     name="mealTypes"
     id="mealTypes" 
     onChange={(e)=>setMeal(e.target.value)}>
       {mealTypes.map((item,index)=>
       <option value={item} key={index}>
         {item}
       </option>)}
     </Select>
   </FormContainer>
  )
}

export default Form