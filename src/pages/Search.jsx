import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import { Card } from "../component/Card";

export default function Search() {
  const [searchParams] = useSearchParams(); //주소의 쿼리 스트링 값을 가져올 수 있는 객체와 쿼리 스트링을 수정할 수 있는 함수
  const param = searchParams.get("pokemon"); //app.jsx에서 navigate으로 생성된 쿼리스트링 pokemon의 값
  const reg = getRegExp(param);

  const pokemon = useSelector(selectPokemonByRegExp(reg));

  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
