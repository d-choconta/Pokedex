import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS } from "../Graphql/queries"; 
import { Pokemon } from "../types/pokemon";
import PokemonCard from "../components/PokemonCard";
import styles from "./ListaPokemones.module.css";

const pokemonsPerPage = 50; 

const ListaPokemones = () => {
  const [currentPage, setCurrentPage] = useState(0); 

  // Obtener los Pokémon con paginación
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { limit: pokemonsPerPage, offset: currentPage * pokemonsPerPage },
    fetchPolicy: "cache-and-network",
  });

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Cargando...</p>
      </div>
    );
  }
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  const pokemons = data?.pokemon_v2_pokemon || [];

  // Validación si no hay Pokémon disponibles
  if (pokemons.length === 0) {
    return <p className={styles.noResults}>No se encontraron Pokémon.</p>;
  }

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Lista de Pokémones</h1>
      <p className={styles.subtitulo}>Explora y descubre los Pokémon disponibles en la región.</p>

      {/* Grid de Pokémon */}
      <div className={styles.grid}>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {/* Controles de paginación */}
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          className={styles.pageButton}
        >
          Anterior
        </button>
        <span className={styles.pageInfo}>
          Página {currentPage + 1}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={styles.pageButton}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ListaPokemones;
