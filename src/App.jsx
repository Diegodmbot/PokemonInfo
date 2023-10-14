import { useState } from "react";
import "./App.css";
import { Pokemon } from "./components/Pokemon";
import { usePokemon } from "./hocks/usePokemon";

function App() {
  const [search, setSearch] = useState("");
  const { pokemons } = usePokemon({ search });

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
        <Pokemon pokemons={pokemons} />
      </main>
    </>
  );
}

export default App;
