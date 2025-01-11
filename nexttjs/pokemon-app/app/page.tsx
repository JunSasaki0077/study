"use client";

import Header from "@/components/Header";
import PokemonCard from "@/components/PokemonCard";
import { useGlobalContext } from "@/context/globalContext";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { isLoading } = useUser();
  const { pokemonListDetails, loading } = useGlobalContext();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <Header />
      <section></section>
      <section className="min-h-[91vh]">
        <div className="px-16 py-8 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {!loading &&
            pokemonListDetails.map((pokemon: any, index) => {
              return <PokemonCard pokemon={pokemon} key={index} />;
            })}
        </div>
      </section>
    </main>
  );
}
