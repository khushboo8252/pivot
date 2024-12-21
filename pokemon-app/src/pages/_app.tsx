import React from 'react';
import { AppProps } from 'next/app';
import { PokemonProvider } from '../context/PokemonContext';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <PokemonProvider>
      <Component {...pageProps} />
    </PokemonProvider>
  );
};

export default MyApp;