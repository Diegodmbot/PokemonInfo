import { useState } from "react";
import "./App.css";
import { Pokedex } from "./components/Pokedex";
import { usePokedex } from "./hooks/usePokedex";

function App() {
  const [search, setSearch] = useState("");
  const { pokemons } = usePokedex({ search });

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="page">
        <header>
          <h1>Pokedex</h1>
          <form>
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
