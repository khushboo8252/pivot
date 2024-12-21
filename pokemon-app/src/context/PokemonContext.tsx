// src/context/PokemonContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchPokemon } from '../utils/api';
import { Pokemon } from '../types/pokemon';

interface PokemonContextType {
  filteredList: Pokemon[];
  loading: boolean;
  availableTypes: string[];
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [availableTypes, setAvailableTypes] = useState<string[]>([]);

  useEffect(() => {
    const loadPokemon = async () => {
      const data = await fetchPokemon(20, 0); // Fetch first 20 Pokemon
      setPokemonList(data);
      setLoading(false);
      // Extract available types from the fetched data
      const types = Array.from(new Set(data.flatMap(pokemon => pokemon.types)));
      setAvailableTypes(types);
    };
    loadPokemon();
  }, []);

  const filteredList = selectedTypes.length > 0
    ? pokemonList.filter(pokemon => pokemon.types.some(type => selectedTypes.includes(type)))
    : pokemonList;

  return (
    <PokemonContext.Provider value={{ filteredList, loading, availableTypes, selectedTypes, setSelectedTypes }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }
  return context;
};