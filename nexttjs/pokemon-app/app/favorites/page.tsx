"use client";

import Header from "@/components/Header";
import PokemonCard from "@/components/PokemonCard";
import { useGlobalContext } from "@/context/globalContext";
import { useEffect, useState } from "react";

const Page = () => {
  const { fetchPokemonByName, userDetails } = useGlobalContext();

  const [likedPokemons, setLikedPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userDetails?.liked) {
      setLoading(true);
      const fetchPokemons = async () => {
        const pokemonDetails = await Promise.all(
          userDetails.liked.map(async (pokemon: any) => {
            const details = await fetchPokemonByName(pokemon);

            return details;
          })
        );

        setLikedPokemons(pokemonDetails as any);
      };
      setLoading(false);
      fetchPokemons();
    }
  }, [userDetails?.liked]);

  return (
    <main>
      <Header />
      <section className="min-h-[91vh]">
        {likedPokemons.length > 0 ? (
          <div className="px-16 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {likedPokemons.map((pokemon: any, index: number) => (
              <PokemonCard key={pokemon.name + index} pokemon={pokemon} />
            ))}
          </div>
        ) : (
          <div>No liked pokemons</div>
        )}
      </section>
    </main>
  );
};
export default Page;
