import { useState } from "react";
import "./App.css";

import PokemonCard from "./PokemonCard";

const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];

const typeColors = {
  Grass: "#c0d41b",
  Fire: "#fe6a50a3",
  Water: "#3a93fa",
  Electric: "#a8f0f0",
  Psychic: "#e5a4ff",
  Normal: "#fdea58",
  Ghost: "#ffffff",
  Dragon: "#fa7c04",
  Fighting: "rgb(255, 114, 215)",
  Rock: "#757070ad",
  All: "#7b8bf5",
};
// Sprite image URL pattern:
// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

function App() {
  const [selectedType, setSelectedType] = useState("All");
  console.log(selectedType);
  const [hoveredType, setHoveredType] = useState(null);
  return (
    <div>
      <div>
        <h1
          style={{
            fontFamily: "Playfair Display",
            fontSize: 100,
            marginTop: 40,
          }}
        >
          Pokédex
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "center",
          marginTop: 80,
        }}
      >
        {[
          "All",
          "Grass",
          "Fire",
          "Water",
          "Electric",
          "Psychic",
          "Normal",
          "Ghost",
          "Dragon",
          "Fighting",
          "Rock",
        ].map((type) => (
          <button
            style={{
              fontFamily: "Lexend",
              fontSize: 20,
              backgroundColor:
                type === selectedType ? "#00000033" : typeColors[type],
              filter:
                type === selectedType ? "brightness(0.7)" : "brightness(1)",
              boxShadow:
                type === hoveredType ? "0px 4px 8px rgba(0,0,0,0.3)" : "none",
            }}
            key={type}
            onMouseEnter={() => setHoveredType(type)}
            onMouseLeave={() => setHoveredType(null)}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {pokemons
          .filter((p) => selectedType === "All" || p.type === selectedType)
          .map((pokemon, i) => (
            <PokemonCard
              key={i}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              hp={pokemon.hp}
              attack={pokemon.attack}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
