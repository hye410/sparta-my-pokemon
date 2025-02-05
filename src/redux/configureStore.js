import { configureStore } from "@reduxjs/toolkit";
import pokemon from "./store/pokemonSlice";

const store = configureStore({
  reducer: {
    pokemon,
  },
});

export default store;
