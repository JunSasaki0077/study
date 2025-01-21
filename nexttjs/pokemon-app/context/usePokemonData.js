/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import _ from "lodash";

const pokemonBaseUrl = "https://pokeapi.co/api/v2";

export const usePokemonData = () => {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemonListDetails, setPokemonListDetails] = useState([]);
  const [activePokemon, setActivePokemon] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [originalPokemonListDetails, setOriginalPokemonListDetails] = useState(
    []
  );

  const fetchPokemon = async (page = 1) => {
    setLoading(true);
    try {
      const offset = (page - 1) * 50;
      const res = await axios.get(
        `${pokemonBaseUrl}/pokemon?offset=${offset}&limit=40`
      );
      setLoading(false);

      setPokemonList((prev) => [...prev, ...res.data.results]);
      setCurrentPage(page);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllPokemon = async () => {
    try {
      const res = await axios.get(`${pokemonBaseUrl}/pokemon?limit=1118`);

      setAllPokemon(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPokemonDetails = useCallback(async () => {
    setLoading(true);
    try {
      const details = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return res.data;
        })
      );
      setLoading(false);
      setPokemonListDetails(details);
      setOriginalPokemonListDetails(details);
    } catch (error) {
      console.log("Error fetching pokemon details", error);
    }
  }, [pokemonList]);

  const fetchPokemonByName = async (name) => {
    setLoading(true);
    try {
      const res = await axios.get(`${pokemonBaseUrl}/pokemon/${name}`);
      setLoading(false);
      setActivePokemon(res.data);

      return res.data;
    } catch (error) {
      console.error("Error fetching pokemon by name", error);
    }
  };

  const searchPokemon = async (query) => {
    if (!query) {
      setSearchQuery("");

      const details = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return res.data;
        })
      );
      setPokemonListDetails(details);
      return;
    }
    setLoading(true);

    const filteredPokemon = allPokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(query.toLowerCase());
    });

    try {
      const filtered = await Promise.all(
        filteredPokemon.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);

          return res.data;
        })
      );

      setLoading(false);
      setPokemonListDetails(filtered);
    } catch (error) {
      console.error("Error searching pokemon", error);
    }
  };

  const debouncedSearch = _.debounce((value) => {
    searchPokemon(value);
  }, 500);

  const loadMore = () => {
    fetchPokemon(currentPage + 1);
  };
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    debouncedSearch(value);
  };

  useEffect(() => {
    fetchPokemon();
    fetchAllPokemon();
  }, []);

  useEffect(() => {
    if (pokemonList.length > 0) {
      fetchPokemonDetails();
    }
  }, [pokemonList, fetchPokemonDetails]);

  return {
    fetchPokemon,
    loading,
    pokemonList,
    pokemonListDetails,
    fetchPokemonByName,
    activePokemon,
    loadMore,
    searchPokemon,
    handleSearchChange,
  };
};
