function Cartao() {
  const nome = "Gustavo";
  const curso = "ADS";
  const totalAulas = 15;

  return (
    <div className="cartao">

      <h3>Sobre mim</h3>

      <p>Nome: {nome}</p>

      <p>Curso: {curso}</p>

      <ul>
        <li>Programação</li>
        <li>Games</li>
        <li>Tecnologia</li>
      </ul>

      <h3>Aulas</h3>

      <p>
        Teremos {totalAulas} aulas no semestre.
      </p>

    </div>
  );
}

export default Cartao;