import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

export default function FavoriteButton({ pokemonId }) {
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  ); //좋아요 누르면 true 아니면 false 리턴
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId })
        );
      }}
      className={isFavorite ? "text-[red]" : ""}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
}
