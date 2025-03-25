import { useState } from "react";
import styles from "./Movimientos.module.css";

interface Movimiento {
  nombre: string;
  poder: number;
  precision: number;
  pp: number;
}

interface MovimientosProps {
  movimientos: Movimiento[];
}

const Movimientos: React.FC<MovimientosProps> = ({ movimientos }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles["movimientos-container"]}>
      <button onClick={() => setVisible(!visible)} className={styles["boton-movimientos"]}>
        {visible ? "Ocultar Movimientos" : "Mostrar Movimientos"}
      </button>
      {visible && (
        <ul className={styles["lista-movimientos"]}>
          {movimientos.map((mov, index) => (
            <li key={index}>
              <strong>{mov.nombre}</strong> - Poder: {mov.poder || "N/A"}, Precisión: {mov.precision || "N/A"}, PP: {mov.pp || "N/A"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movimientos;