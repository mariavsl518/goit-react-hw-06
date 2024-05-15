import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import contactsReducer from "./contactsSlice"
import filterReducer from './filtersSlice'
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
}

const pContactsReducer = persistReducer(contactsPersistConfig, contactsReducer)

export const store = configureStore({
    reducer:{
        contacts : pContactsReducer,
        filter : filterReducer,
    }
});

export const persistor = persistStore(store)