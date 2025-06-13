import { lazy, Suspense, useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
  const navigate = useNavigate(); // 특정 주소로 이동할 수 있게 해주는 함수
  const dispatch = useDispatch(); // Redux store에 액션을 보낼 수 있게 해주는 함수
  useEffect(() => {
    // 앱 시작 시, Redux store에 포켓몬 151마리 데이터를 비동기로 불러와서 저장
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="border-t-[50px] border-t-[red] bg-black text-[40px] text-center text-white">
        포켓몬 도감
      </h1>
      <nav className="flex gap-[20px] justify-center py-10 border-b border-b-black">
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>찜목록</Link>
        <div>
          <input
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
            className="w-[120px] border-b border-[darkgray] px-2"
          />
          <span>🔍</span>
        </div>
      </nav>
      <main className="flex flex-wrap gap-[20px] pt-[20px] justify-center bg-[gray]">
        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:pokemonId" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
