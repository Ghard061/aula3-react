function Cartao() {
  return (
    <div className="cartao">
      <h3>Sobre a Aula 3</h3>

      <p>
        Nesta aula vamos aprender React,
        JSX e componentes funcionais.
      </p>

      <ul>
        <li>O que é React</li>
        <li>Sintaxe JSX</li>
        <li>Componentes funcionais</li>
      </ul>
    </div>
  );
}

function porcentagem(parte, total) {
  return Math.round((parte / total) * 100);
}

function Cartao() {
  const titulo = "Sobre a Aula 3";
  const totalTopicos = 5;
  const concluidos = 3;

  return (
    <div className="cartao">
      <h3>{titulo}</h3>

      <p>
        Progresso:
        {porcentagem(concluidos, totalTopicos)}%
      </p>

      <p>
        Faltam {totalTopicos - concluidos} tópicos.
      </p>
    </div>
  );
}



export default Cartao;