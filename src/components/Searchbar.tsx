import { useState, useEffect } from "react";
import styles from "../components/SearchBar.module.css";

interface SearchbarProps {
  onSearch: (searchTerm: string, searchType: string) => void;
}

const Searchbar = ({ onSearch }: SearchbarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");


  useEffect(() => {
    onSearch(searchTerm, searchType);
  }, [searchTerm, searchType, onSearch]);
  
  return (
    <div className={styles.searchContainer}>
      
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
  
      
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className={styles.searchSelect}
      >
        <option value="">Todos los tipos</option>
        <option value="Bug">Bicho</option>
        <option value="Dragon">Dragón</option>
        <option value="Electric">Eléctrico</option>
        <option value="Fairy">Hada</option>
        <option value="Fighting">Lucha</option>
        <option value="Fire">Fuego</option>
        <option value="Flying">Volador</option>
        <option value="Ghost">Fantasma</option>
        <option value="Grass">Planta</option>
        <option value="Ground">Tierra</option>
        <option value="Ice">Hielo</option>
        <option value="Normal">Normal</option>
        <option value="Poison">Veneno</option>
        <option value="Psychic">Psíquico</option>
        <option value="Rock">Roca</option>
        <option value="Steel">Acero</option>
        <option value="Water">Agua</option>
      </select>
    </div>
  );
  
};

export default Searchbar;
