import { useSelector } from "react-redux";
import { selectFavoritePokemon } from "../RTK/selector";
import { Card } from "../component/Card";

export default function Favorite() {
  const pokemon = useSelector(selectFavoritePokemon);
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} /> // 각 포켓몬마다 카드 생성
      ))}
    </>
  );
}
