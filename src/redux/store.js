import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./reducers/cars.reducer";
import { alertsReducer } from "./reducers/alerts.reducer";
const rootReducer = combineReducers({
  carsReducer,
  alertsReducer,
});
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
