import React from "react";
import Image from "next/image";
import { Pokemon } from "../types/pokemon"; // Ensure this type is correctly defined

const PokemonCard: React.FC<Pokemon> = ({ id, name, types, sprite }) => {
  return (
    <div className="border bg-black rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={sprite}
        alt={name}
        width={128}
        height={128}
        className="w-full h-32 object-contain"
        priority
        unoptimized
      />
      <h2 className="text-lg text-white font-bold">{name}</h2>
      <p className="text-sm text-white">ID: {id}</p>
      <div className="flex space-x-2">
        {types.map((type) => (
          <span
            key={type}
            className="bg-blue-200 rounded-full px-2 py-1 text-xs capitalize"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
