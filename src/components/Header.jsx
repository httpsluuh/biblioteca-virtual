function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>✦</span> Biblioteca Encantada
      </div>

      <div className="header-text">
        <p className="subtitulo">SEU PRÓXIMO CAPÍTULO COMEÇA AQUI</p>

        <h1>
          Descubra histórias
          <br />
          que ficam com você.
        </h1>

        <p className="descricao">
          Um espaço para descobrir novos mundos através da leitura.
        </p>

        <a href="#livros" className="botao-header">
          Explorar livros
        </a>
      </div>
    </header>
  );
}

export default Header;