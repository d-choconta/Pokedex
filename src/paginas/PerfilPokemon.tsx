import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAILS } from "../Graphql/queries";
import { useParams } from "react-router-dom";
import styles from "../paginas/perfilPokemon.module.css";
import Movimientos from "../components/Movimientos";
import Estadisticas from "../components/Estadisticas";

const PerfilPokemon = () => {
  const { id } = useParams<{ id?: string }>();
  const pokemonId = id ? parseInt(id, 10) : null;

  console.log("ID del Pokémon desde URL:", pokemonId);

  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    variables: { id: pokemonId },
    skip: pokemonId === null,
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Cargando...</p>
      </div>
    );
  }

  if (error) {
    console.error("Error en la consulta GraphQL:", error);
    return <p className={styles.error}>Error: {error.message}</p>;
  }

  const pokemon = data?.pokemon_v2_pokemon?.[0];

  if (!pokemon) {
    console.warn("Pokémon no encontrado en la API.");
    return <p className={styles.notFound}>Pokémon no encontrado.</p>;
  }

  
  let pokemonImage = 
    pokemon.image || 
    pokemon.pokemon_v2_pokemonsprites?.[0]?.sprites?.other?.["official-artwork"]?.front_default || 
    pokemon.pokemon_v2_pokemonsprites?.[0]?.sprites?.front_default || 
    "https://placehold.co/100";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <img
        className={styles.pokemonImage} 
        src={pokemonImage}
        alt={pokemon.name}
        onError={(e) => (e.currentTarget.src = "https://placehold.co/100")}
      />

      
      <div className={styles.infoContainer}>
        
        <div className={styles.column}>
          <p><strong>Altura:</strong> {pokemon.height || "N/A"}</p>
          <p><strong>Peso:</strong> {pokemon.weight || "N/A"}</p>
          <p><strong>Experiencia Base:</strong> {pokemon.base_experience || "N/A"}</p>
          <p><strong>Tipos:</strong> {pokemon.pokemon_v2_pokemontypes?.map(t => t.pokemon_v2_type?.name).join(", ") || "Desconocido"}</p>

          <h3 className={styles.subTitle}>Habilidades</h3>
          <ul>
            {pokemon.pokemon_v2_pokemonabilities?.length > 0 
              ? pokemon.pokemon_v2_pokemonabilities.map((hab, index) => (
                  <li key={index}>{hab.pokemon_v2_ability?.name}</li>
                ))
              : <p>No tiene habilidades registradas.</p>
            }
          </ul>

          <h3 className={styles.subTitle}>Habilidades Pasadas</h3>
          <ul>
            {pokemon.pokemon_v2_pokemonabilitypasts?.length > 0 
              ? pokemon.pokemon_v2_pokemonabilitypasts.map((hab, index) => (
                  <li key={index}>{hab.pokemon_v2_ability?.name}</li>
                ))
              : <p>No tiene habilidades pasadas registradas.</p>
            }
          </ul>
        </div>

        
        <div className={styles.column}>
          <h3 className={styles.subTitle}>Estadísticas</h3>
          <Estadisticas 
            stats={pokemon.pokemon_v2_pokemonstats?.map(stat => ({
              name: stat.pokemon_v2_stat?.name,
              base_stat: stat.base_stat
            })) || []}
          />

          <h3 className={styles.subTitle}>Movimientos</h3>
          <Movimientos 
            movimientos={pokemon.pokemon_v2_pokemonmoves?.map(move => ({
              nombre: move.pokemon_v2_move?.name,
              poder: move.pokemon_v2_move?.power,
              precision: move.pokemon_v2_move?.accuracy,
              pp: move.pokemon_v2_move?.pp
            })) || []}
          />
        </div>
      </div>

      
      <div className={styles.extraInfoContainer}>
        
        <div className={styles.columnSmall}>
          <h3 className={styles.subTitle}>Formas Alternativas</h3>
          <p>{pokemon.pokemon_v2_pokemonforms?.map(f => f.form_name).join(", ") || "Ninguna"}</p>
        </div>

        
        <div className={styles.columnSmall}>
          <h3 className={styles.subTitle}>Ubicaciones</h3>
          <ul>
            {pokemon.pokemon_v2_encounters?.length > 0 ? (
              [...new Set(pokemon.pokemon_v2_encounters.map(encounter => encounter.pokemon_v2_locationarea?.name))]
                .map((location, index) => (
                  <li key={index}>
                    {typeof location === "string" ? location.replace(/-/g, " ") : "Ubicación desconocida"}
                  </li>
                ))
            ) : (
              <li>No disponible</li>
            )}
          </ul>
        </div>

        
        <div className={styles.columnSmall}>
          <h3 className={styles.subTitle}>Especie</h3>
          <p><strong>Felicidad Base:</strong> {pokemon.pokemon_v2_pokemonspecy?.base_happiness || "N/A"}</p>
          <p><strong>Tasa de Captura:</strong> {pokemon.pokemon_v2_pokemonspecy?.capture_rate || "N/A"}</p>
        </div>

        
        <div className={styles.columnSmall}>
          <h3 className={styles.subTitle}>Evoluciones</h3>
          <ul>
            {pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_evolutionchain?.pokemon_v2_pokemonspecies?.length > 0 
              ? pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.map((evo, index) => (
                  <li key={index}>{evo.name}</li>
                ))
              : <p>No hay evoluciones registradas.</p>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerfilPokemon;