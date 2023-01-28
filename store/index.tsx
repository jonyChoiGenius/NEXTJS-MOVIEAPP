import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSeletor,
} from "react-redux";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const makeStore = () => store;

const wrapper = createWrapper(makeStore);
export default wrapper;

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSeletor;