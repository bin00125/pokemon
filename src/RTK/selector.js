import { createSelector } from "@reduxjs/toolkit"; // 성능 최적화를 위한 selector 생성 함수

// 특정 포켓몬 ID에 해당하는 데이터를 반환하는 selector
// Redux store의 pokemon slice의 data 배열에서 해당 ID에 맞는 포켓몬 객체 찾기
export const selectPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.pokemon.data, // 상태 트리에서 pokemon.data만 가져옴
    (pokemon) => pokemon.find((el) => el.id === pokemonId) // 해당 ID에 맞는 포켓몬 리턴
  );

//검색 정규식 반환 셀렉터
export const selectPokemonByRegExp = (reg) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
  );

//찜목록 셀렉터
export const selectFavoritePokemon = createSelector(
  (state) => state.pokemon.data,
  (state) => state.favorite,
  (pokemon, favorite) => {
    return pokemon.filter((el) => favorite.includes(el.id));
  }
);
