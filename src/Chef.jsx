import React from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromMistral } from './ai';


export default function Chef() {

  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("")

  async function getRecipe() {
    const aiRecipeMd = await getRecipeFromMistral(ingredients)
    setRecipe(aiRecipeMd)
    console.log(aiRecipeMd)
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    
  }


  



  return (
    <main>
      <form className="search-container" action={addIngredient}>
        <input 
            type="text" 
            className="search-input" 
            aria-label="Add Ingredient" 
            placeholder="e.g. oregano" 
            name="ingredient"
        />
        <button className="search-button" type="submit">Add Ingredient</button>
      </form>
      


      {ingredients.length > 0 && 
        <IngredientsList 
          
          ingredients={ingredients} 
          getRecipe={getRecipe}
          
        />
      }

      {recipe && 
        <ClaudeRecipe recipe={recipe} />
      }






    </main>
  );
}