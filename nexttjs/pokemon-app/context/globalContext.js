import React, { useEffect } from "react";
import { usePokemonData } from "@/context/usePokemonData";
import { useUserData } from "@/context/useUserData";
import { useUser } from "@auth0/nextjs-auth0/client";

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const { user } = useUser();
  const {
    loading,
    fetchPokemon,
    pokemonList,
    pokemonListDetails,
    fetchPokemonByName,
    activePokemon,
    loadMore,
    searchQuery,
    handleSearchChange,
  } = usePokemonData();

  const { userDetails, performAction, fetchUserDetails } = useUserData();

  useEffect(() => {
    if (user) fetchUserDetails();
  }, [user]);
  return (
    <GlobalContext.Provider
      value={{
        loading,
        fetchPokemon,
        pokemonList,
        pokemonListDetails,
        fetchPokemonByName,
        activePokemon,
        loadMore,
        userDetails,
        performAction,
        fetchUserDetails,
        searchQuery,
        handleSearchChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
