import React from 'react';
import PokedexGrid from '../components/PokedexGrid'; // Adjust the path as necessary
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div>
    <h1 className="font-bold text-4xl text-blue-500 text-center mt-2">Welcome to the Pokemon Pokedex!</h1> 
    <PokedexGrid />
    <Footer />
    </div>
  );
};

export default Home;