import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS } from "../Graphql/queries";
import Searchbar from "../components/Searchbar";
import PokemonCard from "../components/PokemonCard"; 
import { Pokemon } from "../types/pokemon";
import styles from "../paginas/Busqueda.module.css";

const Busqueda = () => {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { limit: 1350, offset: 0 }, 
    fetchPolicy: "cache-and-network",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Cargando...</p>
      </div>
    );
  }
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  const handleSearch = (term: string, type?: string) => {
    setSearchTerm(term.toLowerCase());
    setSearchType(type?.toLowerCase() || "");
  };

 
  const pokemons: Pokemon[] = data?.pokemon_v2_pokemon || [];

 
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm) &&
    (!searchType ||
      pokemon.pokemon_v2_pokemontypes?.some(
        (t) => t.pokemon_v2_type?.name?.toLowerCase() === searchType
      ))
  );
  
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Búsqueda en la Pokédex</h1>
      <p className={styles.subtitulo}>Explora y descubre información de Pokémon.</p>

      <Searchbar onSearch={handleSearch} />

      <div className={styles.grid}> 
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p className={styles.noResults}>No se encontró ninguna coincidencia.</p>
        )}
      </div>
    </div>
  );
};

export default Busqueda;
