import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

// 포켓몬 상태 슬라이스 정의
// 실제 store에 저장되는 상태 구조
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [], // 포켓몬 데이터 배열
    loading: true, // 로딩 상태
  },
  reducers: {}, //동기적 상태 변경
  extraReducers: (builder) => {
    //비동기적 상태 변경
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true; // 로딩 시작
      })
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        state.loading = false; // 로딩 실패
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loading = false; // 로딩 완료
        state.data = action.payload; // fetch 결과를 Redux store에 저장
      });
  },
});

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [1, 2, 3],
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    },
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      if (index !== -1) state.splice(index, 1);
    },
  },
});
