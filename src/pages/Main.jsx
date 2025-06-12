import { useSelector } from "react-redux";
import { Card } from "../component/Card";

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon.data);
  console.log(JSON.stringify(pokemonData, null, 2));
  return (
    <>
      {pokemonData.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
