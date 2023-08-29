
import { configureStore } from "@reduxjs/toolkit";

import AuthRedux from "./Redux/AuthRedux";
import QuestionReducer from "./Redux/QuestionReducer";

const store = configureStore({
    reducer : {
        auth : AuthRedux,
        question : QuestionReducer
    }
})

export default store;

