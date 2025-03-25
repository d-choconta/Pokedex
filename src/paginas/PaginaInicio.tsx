import { useQuery } from "@apollo/client";
import { GET_10_POKEMONS } from "../Graphql/queries";
import PokemonCard from "../components/PokemonCard"; 
import { Pokemon } from "../types/pokemon";
import styles from "../paginas/PaginaInicio.module.css";
import pikaImage from "../img/1.png";


const PaginaInicio = () => {
  const { loading, error, data } = useQuery(GET_10_POKEMONS);
  console.log("Datos de Pokémon recibidos:", data);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>Error: {error.message}</p>
      </div>
    );
  }

  const pokemons = data?.pokemon_v2_pokemon || [];
  
  return (
    <div className={styles.contenedor}>
      {/* Sección Info */}
      <section className={styles.info}>
        <div className={styles.textoConImagen}>
          {/* Imagen Logo Pokemon */}
          <div className={styles.imagenContainer}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg" 
              alt="Pokémon Logo" 
              className={styles.imagen} 
            />
          </div>

          {/* Contenedor imagen al lado del texto */}
          <div className={styles.contenedorTexto}>
            {/* Imagen al lado del texto */}
            <div className={styles.imagenpika}>
              <img src={pikaImage} alt="Pokémon pika" className={styles.imagen} />
            </div>

            {/* Texto con botón */}
            <div className={styles.texto}>
              <h1 className={styles.titulo}>¡Bienvenido! Encuentra a los Pokémones más fuertes y raros.</h1>
              <p className={styles.subtitulo}>
                Explora la Pokédex y descubre información sobre todos los Pokémon, sus habilidades, tipos y evoluciones.
              </p>
              <a href="/Busqueda" className={styles.btn}>Explorar</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección titulo Pokémones */}
      <div className={styles.textocartas}>
        <h1 className={styles.titulo}>Pokémones encontrados en esta región:</h1>
      </div>

      {/* Sección Grid */}
      <section className={styles.gridContainer}>
        {pokemons?.length ? (
          pokemons.map((pokemon: Pokemon) => (
            <PokemonCard 
              key={pokemon.id} 
              pokemon={pokemon} 
            />
          ))
        ) : (
          <p className={styles.noResults}>No se encontraron Pokémon en esta región.</p>
        )}
      </section>
    </div>
  );
};

export default PaginaInicio;
