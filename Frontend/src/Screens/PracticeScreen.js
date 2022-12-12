import '../style/practice.css'
import { useEffect, useState } from "react";
import axios from "axios"
import Question from "../component/Questions";
import {  Navigate } from "react-router-dom";
import * as Action from '../Redux/QuestionReducer'
import * as Actions from '../Redux/ResultReducer'

import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';


import {useDispatch, useSelector} from 'react-redux'
import ScreenreaderLabelExample from '../component/ProgressBar';

function PracticeScreen(){
const dispatch = useDispatch(); 
const[check , setcheck] = useState(undefined)
const result = useSelector(state =>state.result.result)
const {trace,queue } = useSelector(state =>state.questions)
const {questions:{ answers } } = useSelector(state => state)

    // display the random question from backend 
useEffect(()=>{
    const fetchquestions =async()=>{ 
        const response =await axios.get('/words')
            let questions = response.data
            let answers =[]
            // push the answers of question in another array
            for (let i=0 ; i<10 ; i++)
            {
                answers.push( questions[i].pos)
            }
            
            dispatch(Action.startExamAction({questions ,answers }))
            
   }
   fetchquestions();

   
},[dispatch])
function onChecked(check){
    setcheck(check)
}
// validate the student to go to the next questions and save the answers of student in array 
function next(){
    
    if(trace < queue.length){
        // increse the trace
        dispatch(Action.moveNextAction(trace))
        // add result in the array
        dispatch(Actions.pushResultAction(check))
    }
        // displaya notification that tell him if answer is wrong or correct
        if(answers[trace] === check)
        {
                addNotification({
                    title: 'Correct',
                    subtitle: 'correct answer',
                    theme: 'light',
                    closeButton:"X",
                    backgroundTop:"green",
                    backgroundBottom:"yellowgreen"
                  })
            }
            else{
            
                addNotification({
                    title: 'Wrong',
                    subtitle: 'your answer is wrong',
                    theme: 'red',
                    closeButton:"X",         
                })
                
            }
            
            
            // reset the value
            onChecked(undefined)        
            
        }
        // if the student go the last question then go to rankscreen 
        if(result.length && result.length >= queue.length)
        {
        return <Navigate to={'/rank'} replace={true}></Navigate>
    }

    
return (
    <div className='main'>
        <Notifications/>
        <div className='questions'>
                <Question onChecked={onChecked}/>
        </div>
        
        
        <button className="next" onClick={next}>
                next
        </button>
            <ScreenreaderLabelExample  trace={trace} queue={queue}/>
    </div>
)

}
export default PracticeScreen;