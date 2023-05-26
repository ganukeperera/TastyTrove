import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourite",
  initialState: {
    ids: [],
  },
  reducers: {
    //functions declare here will be the Redux Actions
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavourite = favouritesSlice.actions.addFavourite; //Exporting action so we can invoke/dispatch these actions
export const removeFavourite = favouritesSlice.actions.removeFavourite;
export default favouritesSlice.reducer; //Exporting this to merge in to the main STORE
