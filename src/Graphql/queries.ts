import { gql } from "@apollo/client";


export const GET_ALL_POKEMONS = gql`
  query getPokemons($limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      height
      weight
      base_experience
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
      sprites
      }
    }
  }
`;

export const GET_10_POKEMONS = gql`
  query getPokemons {
    pokemon_v2_pokemon(limit: 10) {
      id
      name
      height
      weight
      base_experience
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;


export const GET_POKEMON_DETAILS = gql`
  query getPokemon($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      base_experience
      height
      weight
      is_default
      order
      pokemon_species_id
      
      # Habilidades del Pokémon
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }

      # Habilidades pasadas del Pokémon
      pokemon_v2_pokemonabilitypasts {
        pokemon_v2_ability {
          name
        }
      }

      # Encuentros en la naturaleza
      pokemon_v2_encounters {
        pokemon_v2_locationarea {
          name
        }
      }

      # Formas alternativas del Pokémon
      pokemon_v2_pokemonforms {
        form_name
      }

      # Índices en juegos
      pokemon_v2_pokemongameindices {
        game_index
        pokemon_v2_version {
          name
        }
      }

      # Movimientos que puede aprender
      pokemon_v2_pokemonmoves {
        pokemon_v2_move {
          name
          power
          accuracy
          pp
        }
      }


      # Estadísticas del Pokémon
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
      }

      # Tipo(s) del Pokémon
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }

      # Sprites del Pokémon
      pokemon_v2_pokemonsprites {
        sprites
      }

      # Especie del Pokémon
      pokemon_v2_pokemonspecy {
        base_happiness
        capture_rate
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies {
            name
          }
        }
      }
    }
  }
`;





