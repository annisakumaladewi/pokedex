import { useState } from "react";

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
};

const PokemonCard = ({ id, name, type, hp, attack }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: 300,
        outline: "1.5px solid black",
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: "#fdfbf7",
        boxShadow: isHovered ? "0px 4px 8px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div
        style={{
          margin: 15,
          marginTop: 5,
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "Libre Baskerville",
              textAlign: "left",
              fontSize: 24,
              marginBottom: 0,
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontFamily: "Roboto",
              fontStyle: "italic",
              color: "#ada3a3",
              textAlign: "left",
            }}
          >
            ID: {id}
          </p>
        </div>
        <div>
          <span
            style={{
              backgroundColor: typeColors[type],
              fontFamily: "Lexend",
              display: "inline-block",
              fontSize: 20,
              textAlign: "right",
            }}
          >
            {type}
          </span>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="pokemon"
          height={130}
        />
      </div>
      <div style={{ margin: 15 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontFamily: "Lexend", fontSize: 20 }}>HP: {hp}</p>
          <div style={{ width: 100, height: 20, backgroundColor: "lightgrey" }}>
            <div
              style={{
                width: `${(hp / 160) * 100}%`,
                height: 20,
                backgroundColor: typeColors[type],
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontFamily: "Lexend", fontSize: 20 }}>Attack: {attack}</p>
          <div style={{ width: 100, height: 20, backgroundColor: "lightgrey" }}>
            <div
              style={{
                width: `${(attack / 134) * 100}%`,
                height: 20,
                backgroundColor: typeColors[type],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
