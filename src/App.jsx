import { useState } from "react";
import "./App.css";
import { Pokedex } from "./components/Pokedex";

function App() {
  const [search, setSearch] = useState("");

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
        <main>
          <Pokedex search={search} />
        </main>
      </div>
    </>
  );
}

export default App;
