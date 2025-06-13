import { createAsyncThunk } from "@reduxjs/toolkit"; // 비동기 thunk 생성 도구

// 1~N번 포켓몬 데이터를 API에서 한 번에 가져오는 thunk 함수
export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokemonId) => {
    const fetchAPI = async (pokemonId) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      const data = await response.json();

      // 필요한 정보만 가공해서 리턴
      const pokemonData = {
        id: pokemonId,
        name: data.names.find((el) => el.language.name === "ko").name,
        description: data.flavor_text_entries.find((el) => el.language.name === "ko")
          .flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
      };

      return pokemonData;
    };

    // 1 ~ maxPokemonId 까지 번호 생성 후 API 요청
    const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);
    return await Promise.all(numberArray.map((el) => fetchAPI(el)));
  }
);
