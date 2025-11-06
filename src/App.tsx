import React from "react";
import Orb from "./Orb"; // Importando o componente que você acabou de corrigir
import "./styles.css";

export default function App() {
  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "800px", // Altura da sua dobra
    position: "relative",
    backgroundColor: "black",
  };

  return (
    <div style={containerStyle}>
      <Orb hoverIntensity={0.5} rotateOnHover={true} hue={270} />

      {/* Conteúdo de Teste */}
      <div></div>
    </div>
  );
}
