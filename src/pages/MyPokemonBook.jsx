import Dashboard from "../components/Dashboard";
import PokeList from "../components/PokeList";
import { Article } from "../style/styledComponents";

export default function MyPokemonBook() {
  return (
    <Article>
      <Dashboard />
      <PokeList />
    </Article>
  );
}
