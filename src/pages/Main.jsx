import { useSelector } from "react-redux";
import { Card } from "../component/Card";

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon.data); // Redux store에 있는 pokemon slice의 data 배열 가져오기
  console.log(JSON.stringify(pokemonData, null, 2));
  return (
    <>
      {pokemonData.map((el) => (
        <Card key={el.id} pokemon={el} /> // 각 포켓몬마다 카드 생성
      ))}
    </>
  );
}
