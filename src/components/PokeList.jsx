import { useDispatch, useSelector } from "react-redux";
import MOCK_DATA from "../data/mockData";
import { StBoard, StCardWrapper } from "../style/StCommon";
import { createAlert } from "../utils/createAlert";
import { checkDuplicatedPokemon, checkUnderMaximum } from "../utils/validation";
import PokeCard from "./PokeCard";

import { addPokemon } from "../redux/store/pokemonSlice";

export default function PokeList() {
  const pokemonList = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  const alertSuccess = createAlert({
    type: "success",
    content: "포켓볼에 추가되었습니다.",
  });

  const alertDuplication = createAlert({
    type: "error",
    content: "이미 추가된 포켓몬입니다.",
  });

  const alertMaximum = createAlert({
    type: "error",
    content: "포켓몬은 최대 6개까지만 선택할 수 있어요.",
  });

  const handleAddPokemon = (targetPokemon) => {
    const isValid =
      checkUnderMaximum(pokemonList) &&
      !checkDuplicatedPokemon(pokemonList, targetPokemon.id);

    if (isValid) {
      alertSuccess();
      dispatch(addPokemon(targetPokemon));
    }

    if (!checkUnderMaximum(pokemonList)) {
      alertMaximum();
    }

    if (checkDuplicatedPokemon(pokemonList, targetPokemon.id)) {
      alertDuplication();
    }
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
