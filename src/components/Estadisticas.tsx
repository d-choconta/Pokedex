import styles from "./Estadisticas.module.css";

interface Stat {
  name: string;
  base_stat: number;
}

interface EstadisticasProps {
  stats?: Stat[];
}

const statColors: Record<string, string> = {
  hp: "#ff4d4d", // Rojo
  attack: "#ff9900", // Naranja
  defense: "#2a9df4", // Azul
  "special-attack": "#ff66b2", // Rosa
  "special-defense": "#66cc66", // Verde
  speed: "#ffcc00", // Amarillo
};

const nameAbbreviations: Record<string, string> = {
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
};

const Estadisticas: React.FC<EstadisticasProps> = ({ stats = [] }) => {
  if (stats.length === 0) {
    return <p className={styles.emptyMessage}>No hay estadísticas disponibles.</p>;
  }

  const maxStat = Math.max(...stats.map((stat) => stat.base_stat), 1); 

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Puntos de Base</h3>
      <div className={styles.chart}>
        {stats.map(({ name, base_stat }) => (
          <div key={name} className={styles.statColumn}>
            <div
              className={styles.bar}
              style={{
                height: `${Math.max(30, (base_stat / maxStat) * 200)}px`,
                backgroundColor: statColors[name] || "#888",
              }}
            >
              {base_stat}
            </div>
            <span className={styles.label}>{nameAbbreviations[name] || name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estadisticas;
