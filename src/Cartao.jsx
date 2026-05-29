import "./Cartao.css";

const estiloItem = {
  fontWeight: "bold",
  color: "#1E2A2E"
};

function Cartao() {
  return (
    <div
      className="cartao"
      style={{
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "420px"
      }}
    >
      <h3
        style={{
          color: "#01696F",
          marginTop: 0
        }}
      >
        Sobre a Aula 3
      </h3>

      <p>
        Nesta aula vamos aprender React,
        JSX e componentes funcionais.
      </p>

      <ul>
        <li style={estiloItem}>
          O que é React
        </li>

        <li>Sintaxe JSX</li>

        <li>
          Componentes funcionais
        </li>
      </ul>
    </div>
  );
}

export default Cartao;