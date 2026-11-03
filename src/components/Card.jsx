function Card({ imagem, titulo, autor, categoria }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />

      <div className="card-info">
        <span className="categoria">{categoria}</span>

        <h3>{titulo}</h3>

        <p>Por {autor}</p>

        <button>Conhecer livro</button>
      </div>
    </div>
  );
}

export default Card;