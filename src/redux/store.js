import { configureStore } from "@reduxjs/toolkit";
//import { rootReducer } from "./reducers";

//import { contactsReducer, filterReducer } from "./reducers";

import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
})

/* export const store = configureStore({
    reducer: rootReducer,
}) */