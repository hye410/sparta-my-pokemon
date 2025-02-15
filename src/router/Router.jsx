import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import MyPokemonBook from "../pages/MyPokemonBook";
import DetailPokemon from "../pages/DetailPokemon";
import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<MyPokemonBook />} />
          <Route path="/detail" element={<DetailPokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
