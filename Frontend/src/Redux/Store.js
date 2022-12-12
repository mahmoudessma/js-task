import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import QuestionReducer from './QuestionReducer';
import  ResultReducer  from './ResultReducer';
import StudentReducer from './StudentReducer';

const rootReducer = combineReducers({
    questions : QuestionReducer,
    result : ResultReducer,
    student:StudentReducer,
})

/** create store with reducer */
export default configureStore({ reducer : rootReducer});