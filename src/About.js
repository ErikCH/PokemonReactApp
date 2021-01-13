import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function About(props) {
  let { slug } = useParams();
  const [pokemon, setPokemon] = useState();
  console.log(props);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${slug}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);

        console.log(data);
      });
  }, [slug]);
  return (
    <>
      {pokemon && (
        <div className="w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center">
          <h3 className="text-2xl text-green-900 uppercase">{pokemon.name}</h3>
          <div className="flex justify-center">
            <img className="w-48" src={pokemon.sprites["front_shiny"]} alt="" />
            <img className="w-48" src={pokemon.sprites["back_shiny"]} alt="" />
          </div>
        </div>
      )}
    </>
  );
}
