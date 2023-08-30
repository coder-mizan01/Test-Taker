

import { createSlice } from "@reduxjs/toolkit";

const QuestionSlice = createSlice({
    name : 'question',
    initialState : {
        allQuestion : [],
    },
    reducers : {
        setAllQuestions : (state,action) =>{
            state.allQuestion = action.payload;
        } 
    }
})

export const {setAllQuestions} = QuestionSlice.actions;

export default QuestionSlice.reducer