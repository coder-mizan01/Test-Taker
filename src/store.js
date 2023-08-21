
import { configureStore } from "@reduxjs/toolkit";

import AuthRedux from "./Redux/AuthRedux";

const store = configureStore({
    reducer : {
        auth : AuthRedux
    }
})

export default store;