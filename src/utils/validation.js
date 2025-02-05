export const MAXIMUM_POKEMON = 6;
const checkUnderMaximum = (list) => {
  return list.length < MAXIMUM_POKEMON;
};

const checkDuplicatedPokemon = (oriList, newTarget) => {
  const isDuplicated =
    oriList.findIndex((list) => list.id === newTarget) !== -1;

  return isDuplicated;
};

export const checkValidPokemon = (pokemonList, newPokemon) => {
  const isValid =
    checkUnderMaximum(pokemonList) &&
    !checkDuplicatedPokemon(pokemonList, newPokemon.id);

  if (isValid) return "pass";

  if (!checkUnderMaximum(pokemonList)) return "overMaximum";

  if (checkDuplicatedPokemon(pokemonList, newPokemon.id)) return "duplication";
};
