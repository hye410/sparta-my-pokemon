import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import MyPokemon from "../pages/MyPokemon";
import DetailPokemon from "../pages/DetailPokemon";
import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<MyPokemon />} />
          <Route path="/detail/:id" element={<DetailPokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
