import { VALIDATION_RESULT } from "../constant/constant";
const { PASS, OVER_MAXIMUM, DUPLICATION } = VALIDATION_RESULT;

export const MAXIMUM_POKEMON = 6; // 추가 가능한 최대 포켓몬 수

// 추가 가능한 포켓몬의 개수 이하인지 확인
const checkUnderMaximum = (list) => {
  return list.length < MAXIMUM_POKEMON;
};

// 이미 있는 포켓몬인지 중복 확인
const checkDuplicatedPokemon = (oriList, newTarget) => {
  const isDuplicated =
    oriList.findIndex((list) => list.id === newTarget) !== -1;

  return isDuplicated;
};

// 나만의 포켓몬에 추가가 가능한지 확인
export const checkValidPokemon = (pokemonList, newPokemon) => {
  const isValid =
    checkUnderMaximum(pokemonList) &&
    !checkDuplicatedPokemon(pokemonList, newPokemon.id);

  if (isValid) return PASS;

  if (!checkUnderMaximum(pokemonList)) return OVER_MAXIMUM;

  if (checkDuplicatedPokemon(pokemonList, newPokemon.id)) return DUPLICATION;
};
