import Pokemon from "./Pokemon.js"

const pokemon = new Pokemon("Ditto", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png", $(".pokemonok"))

pokemon.beszel()

//console.log(pokemon)
console.log(pokemon.nev)
console.log(pokemon.mondat)
pokemon.harciero = 2
console.log(pokemon)

/* Privát adattagok elérése getterrel */
//pokemon.nev="Gyaaa"
/* ehhez csak getter van nem lehet átnevezni */

pokemon.mondat = "Jó napot"
pokemon.beszel()

pokemon = new Pokemon("Lucario", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png", $(".pokemonok"))