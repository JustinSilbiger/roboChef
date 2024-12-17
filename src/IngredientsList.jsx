import React from 'react';


export default function IngredientsList(props) {
    
    const ingredientsList = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
      ));

    

    return (
        <section className="ingredients-section">
        <h2 className="ingredients-title">Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
        {props.ingredients.length >= 3 && <div className="recipe-cta">
            <div className="recipe-cta-content">
                <h3 className="recipe-cta-title">Ready for a recipe?</h3>
                <p className="recipe-cta-text">Generate a recipe from your list of ingredients.</p>
            </div>
            <button className="generate-button" onClick={props.getRecipe}>Generate Recipe</button>
        </div>}
      </section>   
    )
}