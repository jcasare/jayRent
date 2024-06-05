import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./reducers/cars.reducer";
const rootReducer = combineReducers({
  carsReducer,
});
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
