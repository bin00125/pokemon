import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/FavoriteButton";
import FlipCard from "../component/FlipCard";

export default function Detail() {
  const { pokemonId } = useParams(); // URL에서 pokemonId 추출
  const pokemon = useSelector(selectPokemonById(Number(pokemonId))); // Redux store의 pokemon.data에서 해당 ID에 맞는 포켓몬 객체 선택
  console.log(pokemon);
  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center rounded-[10px] py-[30px] px-[60px]">
        <div className="text-[28px] mb-[10px]">
          {pokemon.name}
          <FavoriteButton pokemonId={Number(pokemonId)} />
        </div>
        <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
        <FlipCard front={pokemon.front} back={pokemon.back} />
      </div>
    </>
  );
}
