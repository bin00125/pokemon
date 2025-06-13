import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";

const CardContainer = styled.section`
  width: 150px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;

  img {
    width: 120px;
  }
`;

export const Card = memo(({ pokemon }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  // props로 포켓몬 객체 전달
  const navigate = useNavigate(); // 프로그래밍 방식의 페이지 이동을 위한 훅
  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      {isImageLoading ? <div>로딩중...</div> : null}
      <img
        onLoad={() => setIsImageLoading(false)}
        src={pokemon.front}
        style={{ display: isImageLoading ? "none" : "block" }}
      />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
});
