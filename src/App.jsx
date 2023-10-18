import { useState } from "react";
import "./App.css";
import { Pokedex } from "./components/Pokedex";
import { usePokedex } from "./hooks/usePokedex";

function App() {
  const [search, setSearch] = useState("");
  const { pokemons } = usePokedex({ search });
  console.log("Holaa");

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="page">
        <header>
          <h1>Pokemon Info</h1>
          <form className="pokedex_form">
            <input
              type="text"
              onChange={handleChange}
              value={search}
              placeholder="Pokemon name..."
            />
          </form>
        </header>
      </div>
      <main>
        <Pokedex pokemons={pokemons} />
      </main>
    </>
  );
}

export default App;
