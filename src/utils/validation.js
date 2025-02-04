export const MAXIMUM_POKEMON = 6;
export const checkUnderMaximum = (list) => {
  return list.length < MAXIMUM_POKEMON;
};

export const checkDuplicatedPokemon = (oriList, newTarget) => {
  const isDuplicated =
    oriList.findIndex((list) => list.id === newTarget) !== -1;

  return isDuplicated;
};
