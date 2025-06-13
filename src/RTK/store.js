import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemonSlice } from "./slice";

// store 생성 및 pokemon 슬라이스 등록
export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer, // state.pokemon으로 접근 가능
    favorite: favoriteSlice.reducer,
  },
});
