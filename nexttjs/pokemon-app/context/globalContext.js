import React from "react";
import { usePokemonData } from "@/context/usePokemonData";

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const { loading, fetchPokemon, pokemonList, pokemonListDetails } =
    usePokemonData();
  return (
    <GlobalContext.Provider
      value={{ loading, fetchPokemon, pokemonList, pokemonListDetails }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
