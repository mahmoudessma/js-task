import { createSlice } from "@reduxjs/toolkit"

export const StudentReducer = createSlice({
    name: 'student',
    initialState : {
        username : [],
        score : []
    },
    reducers : {
        setScore : (state, action) => {
            let {userId , earnPoints} = action.payload;
            return {
                ...state,
                username : userId,
                score :earnPoints
            }
        }
            }
})

export const { setScore } = StudentReducer.actions;

export default StudentReducer.reducer;