import React from "react";
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
  return (
    <Link to={`/pokemon/${props.pokemon.id}`}>
      <li key={props.pokemon.id}>
        <p>{props.pokemon.name}</p>
        <img src={props.pokemon.image_url} alt={props.pokemon.name}/>
      </li>
    </Link>
  )
};

export default PokemonIndexItem;