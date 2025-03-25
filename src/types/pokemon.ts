export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  is_default: boolean;
  order: number;
  pokemon_species_id: number;

  pokemon_v2_pokemonabilities?: { pokemon_v2_ability: { name: string } }[];
  pokemon_v2_pokemonstats?: { pokemon_v2_stat: { name: string }; base_stat: number }[];
  pokemon_v2_pokemontypes?: { pokemon_v2_type: { name: string } }[];
  pokemon_v2_pokemonsprites?: { sprites: string }[];

  pokemon_v2_pokemonspecy?: { generation: string };

  // Opcional: Imagen basada en `sprites`
  image?: string;
}
