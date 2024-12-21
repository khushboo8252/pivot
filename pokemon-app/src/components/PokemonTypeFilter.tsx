// src/app/components/PokemonTypeFilter.tsx
import React from 'react';

interface PokemonTypeFilterProps {
  availableTypes: string[];
  selectedTypes: string[];
  onTypeSelect: (types: string[]) => void;
}

const PokemonTypeFilter: React.FC<PokemonTypeFilterProps> = ({ availableTypes, selectedTypes, onTypeSelect }) => {
  const handleTypeSelect = (type: string) => {
    if (selectedTypes.includes(type)) {
      onTypeSelect(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeSelect([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex justify-end mb-4 mt-2 bg-slate-400"> {/* Aligns the filter to the right */}
      {availableTypes.map((type) => (
        <button
          key={type}
          onClick={() => handleTypeSelect(type)}
          className={`m-2 mr-4 px-3 py-1 rounded-full text-sm ${selectedTypes.includes(type) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PokemonTypeFilter;
