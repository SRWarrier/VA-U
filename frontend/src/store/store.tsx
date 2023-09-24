import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import UserReducer, { UserState } from "../reducers/userReducer";
import IndustryReducer, {
  IndustryState,
} from "../reducers/industryListReducer";
import EntityTypeReducer, {
  EntityTypeState,
} from "../reducers/entityTypeReducer";

const userPersistConfig = {
  key: "user",
  storage,
};

const industryPersistConfig = {
  key: "industry",
  storage,
};

const entitytypePersistConfig = {
  key: "entitytype",
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, UserReducer),
  industry: persistReducer(industryPersistConfig, IndustryReducer),
  entitytype: persistReducer(entitytypePersistConfig, EntityTypeReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export interface RootState {
  user: UserState;
  industry: IndustryState;
  entitytype: EntityTypeState;
}

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
