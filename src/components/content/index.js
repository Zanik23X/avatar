import React, { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";
import { CharacterLayout } from "../sw-character-layout";
import { CharacterList } from "../sw-character-list";

import { ReactComponent as PlanetSVG } from "../../assets/planet.svg";
import { Select } from "../sw-select";

export const Content = () => {
  const [tab, setTab] = useState("Characters");

  const handleChangeTab = (e) => {
    setTab(e.target.value);
  };

  const planetRotationItem = (
    <>
      <PlanetSVG width={50} height={50} />
      <p>Planets:</p>
    </>
  );

  return (
    <div className="content-layout">
      <Select tab={tab} handleChangeTab={handleChangeTab} />

      {tab === "Characters" &&
        swCharacters.map((character) => (
          <CharacterLayout key={character.name} item={character}>
            <CharacterList label="Name: " item={character.name} />
            <CharacterList label="Gender: " item={character.gender} />
            <CharacterList label="Birth Year: " item={character.birth_year} />
            <CharacterList label="Height: " item={character.height} />
            <CharacterList label="Mass: " item={character.mass} />
            <CharacterList label="Hair color: " item={character.hair_color} />
            <CharacterList label="Skin color: " item={character.skin_color} />
            <CharacterList label="Eye color: " item={character.eye_color} />
          </CharacterLayout>
        ))}

      {tab === "Planets" &&
        swPlanets.map((planet) => (
          <CharacterLayout key={planet.name} item={planet}>
            <CharacterList label="Name: " item={planet.name} />
            <CharacterList
              label={planetRotationItem}
              item={planet.rotation_period}
            />
            <CharacterList label="Terrain: " item={planet.terrain} />
            <CharacterList label="Population: " item={planet.population} />
            <CharacterList label="Diameter: " item={planet.diameter}/>
            <CharacterList label="Gravity: " item={planet.gravity}/>
            <CharacterList label="Surface water: " item={planet.surface_water}/>
            <CharacterList label="Climate: " item={planet.climate}/>
          </CharacterLayout>
        ))}

      {tab === "Starships" &&
        swStarships.map((starships) => (
          <CharacterLayout key={starships.name} item={starships}>
            <CharacterList label="Name: " item={starships.name} />
            <CharacterList label="Model: " item={starships.model} />
            <CharacterList label="Manufacturer: " item={starships.manufacturer} />
          </CharacterLayout>
        ))}
    </div>
  );
};
