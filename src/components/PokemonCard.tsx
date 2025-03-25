import { useNavigate } from "react-router-dom"; 
import { Pokemon } from "../types/pokemon";
import "./PokemonCard.css";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const navigate = useNavigate();

  // Verificar tipo del Pokémon
  const typeClass =
    pokemon.pokemon_v2_pokemontypes?.[0]?.pokemon_v2_type?.name?.toLowerCase() || "normal";

  // Obtener la imagen del Pokémon
  let pokemonImage = pokemon.image;

  if (!pokemonImage) {
    let sprites: any = pokemon.pokemon_v2_pokemonsprites?.[0]?.sprites;

    if (typeof sprites === "string") {
      try {
        sprites = JSON.parse(sprites);
      } catch (error) {
        console.error("Error al parsear sprites:", error);
        sprites = null;
      }
    }

    if (sprites && typeof sprites === "object") {
      pokemonImage =
        sprites?.other?.["official-artwork"]?.front_default ||
        sprites?.front_default ||
        "https://placehold.co/100";
    } else {
      pokemonImage = "https://placehold.co/100";
    }
  }

  // imprime consola
  console.log("Datos del Pokémon:", pokemon);
  console.log("Sprites:", pokemon.pokemon_v2_pokemonsprites);

  return (
    <div className={`pokemon-card ${typeClass}`} onClick={() => navigate(`/perfil/${pokemon.id}`)}>
      <h3 className="pokemon-name">{pokemon.name}</h3>

      {/* Imagen del Pokémon */}
      <img
        className="pokemon-image"
        src={pokemonImage}
        alt={pokemon.name}
        onError={(e) => {
          console.warn("Imagen no cargó:", e.currentTarget.src);
          e.currentTarget.src = "https://placehold.co/100";
        }}
      />

      {/* Tipos del Pokémon */}
      <div className="pokemon-types">
        {pokemon.pokemon_v2_pokemontypes?.length ? (
          pokemon.pokemon_v2_pokemontypes.map((typeObj, index) => (
            <span key={index} className={`type-badge ${typeObj.pokemon_v2_type?.name?.toLowerCase() || "unknown"}`}>
              {typeObj.pokemon_v2_type?.name || "Desconocido"}
            </span>
          ))
        ) : (
          <span className="type-badge unknown">Desconocido</span>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
