import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {
    addPokemon: (state, action) => {
      return (state = [...state, action.payload]);
    },
    deletePokemon: (state, action) => {
      return (state = state.filter((pokemon) =>
        pokemon ? pokemon.id !== action.payload : pokemon
      ));
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
