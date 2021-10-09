import './styles/index.scss'

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
console.log(elevenShieldRecipe)
console.log(elevenGunletRecipie)