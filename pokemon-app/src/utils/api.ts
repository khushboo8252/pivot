// src/app/utils/api.ts
export const fetchPokemon = async (limit: number, offset: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();

  // Fetch detailed data for each Pokémon
  return Promise.all(data.results.map(async (pokemon: any, index: number) => {
    const pokemonDetailsResponse = await fetch(pokemon.url); // Fetch detailed data for each Pokémon
    const pokemonDetails = await pokemonDetailsResponse.json();

    return {
      id: index + offset + 1,
      name: pokemonDetails.name, // Use the detailed name
      types: pokemonDetails.types ? pokemonDetails.types.map((type: any) => type.type.name) : [], // Check if types is defined
      sprite: pokemonDetails.sprites ? pokemonDetails.sprites.front_default : null, // Check if sprites is defined
    };
  }));
};