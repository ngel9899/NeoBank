import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer } from './slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducerLoanOffers } from './sliceLoanOffers';
import { reducerApplication } from './sliceFormApplication';
import { reducerApplicationId } from './getApplicationId';
import { reducerPayment } from './slicePayment';
import { reducerDeny } from './sliceDeny';
import { reducerSigningOfDocuments } from './sliceSigningOfDocuments';
import { reducerCode } from './sliceFinalRegistrationCode';


const rootReducer = combineReducers({
  prescoringSlice: reducer,
  prescoringLoanOffers: reducerLoanOffers,
  prescoringSliceApplication: reducerApplication,
  prescoringSliceApplicationId: reducerApplicationId,
  slicePayment: reducerPayment,
  sliceDeny: reducerDeny,
  sliceSigningOfDocuments: reducerSigningOfDocuments,
  sliceCode: reducerCode,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
/*persistor.flush().then(() => {
  return persistor.purge();
});*/
export default store;
