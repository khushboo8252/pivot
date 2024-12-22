// src/app/components/PokedexGrid.tsx
"use client"; // Add this line

import React from 'react';
import { usePokemon } from '../context/PokemonContext';
import PokemonCard from './PokemonCard';
import PokemonTypeFilter from './PokemonTypeFilter';
import { Pokemon } from '../types/pokemon'; // Import the Pokemon type

const PokedexGrid: React.FC = () => {
  const { filteredList, loading, availableTypes, selectedTypes, setSelectedTypes } = usePokemon();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PokemonTypeFilter
        availableTypes={availableTypes}
        selectedTypes={selectedTypes}
        onTypeSelect={setSelectedTypes}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredList.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokedexGrid;