import { useState } from "react";
const Recipies=()=>{
    const elevenShieldRecipe = {
        leatherStrips: 2,
        ironIngot: 1,
        refinedMoonstone: 4
    };
    
    const elevenGunletRecipie = {
        ...elevenShieldRecipe,
        leather: 1,
        refinedMoonstone: 5
    }
    const [recipe, setRecipe]=useState({})
    return (
        <div>
            <h3>Curent Recipe</h3>
            <button onClick={()=>{setRecipe(elevenShieldRecipe)}}>Eleven shield Recipe</button>
            <button onClick={()=>{setRecipe(elevenGunletRecipie)}}>Eleven guunlet Recipe</button>
        <ul>
            {Object.keys(recipe).map((material)=>(
                (<li key={material}>
                   {material}: {recipe[material]}
                </li>)
            ))}
        </ul>
        </div>

    )
}

export default Recipies

