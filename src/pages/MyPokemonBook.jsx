import Dashboard from "../components/Dashboard";
import PokeList from "../components/PokeList";
import { StMyPokemonBook } from "../style/StMyPokemonBook";

export default function MyPokemonBook() {
  return (
    <StMyPokemonBook>
      <Dashboard />
      <PokeList />
    </StMyPokemonBook>
  );
}
