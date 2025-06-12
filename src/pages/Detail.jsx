import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  console.log(pokemon);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>{pokemon.name}</div>
        <div>{pokemon.description}</div>
        <img src={pokemon.front} />
      </div>
    </>
  );
}
