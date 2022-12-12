import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const QuestionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [],
        answers : [],
        trace : 0
    },
    reducers : {
        // start the exam
        startExamAction : (state, action) => {
            let {questions , answers } = action.payload;
            return {
                ...state,
                queue : questions,
                answers 
            }
        },
        // 
        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        // reset all value
        resetAllAction : () => {
            return {
                queue: [],
                answers : [],
                trace : 0
            }
        }
    }
})

export const { startExamAction ,moveNextAction ,resetAllAction} = QuestionReducer.actions;

export default QuestionReducer.reducer;