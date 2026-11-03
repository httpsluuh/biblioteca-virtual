import Header from "./components/Header";
import Menu from "./components/Menu";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div id="inicio">

      <Header />

      <Menu />

      <main className="conteudo">

        <section id="livros">

          <div className="secao-titulo">
            <div>
              <span>EXPLORE NOSSA COLEÇÃO</span>
              <h2>Livros em destaque</h2>
            </div>

            <p>Histórias selecionadas para você.</p>
          </div>

          <div className="livros">

            <Card
              imagem="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
              titulo="A Biblioteca da Meia-Noite"
              autor="Matt Haig"
              categoria="Ficção"
            />

            <Card
              imagem="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500"
              titulo="O Pequeno Príncipe"
              autor="Antoine de Saint-Exupéry"
              categoria="Fantasia"
            />

            <Card
              imagem="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500"
              titulo="Orgulho e Preconceito"
              autor="Jane Austen"
              categoria="Romance"
            />

          </div>

        </section>

        <section id="sobre" className="sobre">
          <span>UM MUNDO DE POSSIBILIDADES</span>
          <h2>Mais do que livros, novas experiências.</h2>

          <p>
            A Biblioteca Encantada é um espaço dedicado
            aos apaixonados por histórias, conhecimento
            e imaginação.
          </p>
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;