import MOCK_DATA from "../data/mockData";
import { StBoard, StCardWrapper } from "../style/StCommon";
import PokeCard from "./PokeCard";
import { checkDuplicatedPokemon, checkUnderMaximum } from "../utils/validation";
import { useAlert } from "../hooks/useAlert";

export default function PokeList({ addPokemon }) {
  const alertDuplication = useAlert("error", "이미 추가된 포켓몬입니다.");
  const alertMaximum = useAlert(
    "error",
    "포켓몬은 최대 6개까지만 선택할 수 있어요."
  );

  const handleAddPokemon = (targetPokemon) => {
    addPokemon((prev) => {
      const isValid =
        checkUnderMaximum(prev) &&
        !checkDuplicatedPokemon(prev, targetPokemon.id);

      if (isValid) return [...prev, targetPokemon];

      if (!checkUnderMaximum(prev)) {
        alertMaximum();
        return prev;
      }

      if (checkDuplicatedPokemon(prev, targetPokemon.id)) {
        alertDuplication();
        return prev;
      }
    });
  };

  return (
    <StBoard>
      <StCardWrapper>
        {MOCK_DATA.map((data) => (
          <PokeCard
            key={`pokemonCard_${data.id}`}
            data={data}
            handleAction={handleAddPokemon}
          />
        ))}
      </StCardWrapper>
    </StBoard>
  );
}
