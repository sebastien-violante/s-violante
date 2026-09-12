import "./App.css";
import data from "./data/experiences.json"
import Card from './components/Card/Card'

function App() {
  return (
    <main>
      <section className="mainData">
        <h1>Sébastien VIOLANTE</h1>
        <h2>Concepteur d'application</h2>
        <h3>sebastien.violante@gmail.com</h3>

        <a href="https://linkedin.com/in/sebastien-violante" target="_blank">
          <img className="icon" src="/linkedin.png" />
        </a>
      </section>

      <section className="ratelier">
        <button className="mainBulle">
          <h3>Expérience professionnelle développeur</h3>
        </button>
         <button className="mainBulle">
          <h3>Expérience professionnelle aronautique</h3>
        </button>
         <button className="mainBulle">
          <h3>Centres d'inétrêt</h3>
        </button>
      </section>
        {data.map((experience, index) => (
          <Card key={index}/>
        ))}
      <section>

      </section>
    </main>
  );
}

export default App;
