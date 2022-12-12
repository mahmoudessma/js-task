import  '../style/Rank.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { resetAllAction } from "../Redux/QuestionReducer"
import { resetResultAction } from "../Redux/ResultReducer"
import * as Actionss from '../Redux/StudentReducer'

export default function RankScreen(){
    const [rank , setrank] = useState(null)
    const [score1 , setscore1] = useState(null)
    const dispatch =useDispatch();
    const {questions:{queue , answers} , result :{result , userId}} = useSelector(state => state)
    const state = useSelector(state =>state)
    const questions = useSelector(state =>state.questions.queue)
    // return if the result true or false
    function check_result(result, answers){
        return result.map((element, i) => answers[i] === element);
    }
    const check = check_result(result , answers)
    // calculate the score
    function earnPoints_Number(result, answers){
        return (result.map((element, i) => answers[i] === element).filter(i => i).length/queue.length)*100;
    }
    
    const earnPoints = earnPoints_Number(result, answers)

    // display the questions only
    function getquestions (questions){
        let a=[];
        for (let i=0 ; i<queue.length ; i++)
        {
            a[i]= questions[i].word
        }
        return a;
    }

    // return false => wrong , true => correct
    function getcheck(check)
    {
        let a=[];
        for (let i=0 ; i<check.length ; i++)
        {
            
            a[i]= check[i]
            if(a[i] === true)
            {
                a[i]= "correct"
            }
            else{
                a[i]="wrong"
            }
        }

        return a;

    }

    // send the score to backend to calculate the rank
    useEffect(()=>{
        const clacscore=async()=>{
            const scoree= await axios.post(`/rank/${score1}`);
            setrank(scoree.data)
            
        }
        clacscore();
        setscore1(earnPoints)
        
    },[score1])
    
    // save score in array in student redux
    useEffect(()=>{
        function savescore(){
            dispatch(Actionss.setScore({userId, earnPoints}))
        }
        savescore();
        
    },[rank])

    // function reset the data to validate the student restart the exam
    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }


    let que=getquestions(questions);
    const res= getcheck(check);
    return (
        <div className='main '>

            <div className='feedback container'>
                
              <div className='questions'>{que.map((q,i)=>(
                <div key={i}>{q}</div>
              ))}</div>
              <div className='check'>{res.map((res,i)=>(
               <div key={i}>
                   {res && res ==='wrong' ?(
                <div style={{color:"red"}}>{res}</div>
               ):(<div style={{color:"green"}}>{res}</div>)} 
               </div>                
              ))}</div>  
            </div>
            
            <div className='rank container'>
            <p>rank = {rank}</p>

            </div>
            <div className='points container'>

            <p>result =  {earnPoints}</p>
            </div>
            <div className="restart">
                
            <Link to={'/'} className="btn" onClick={onRestart}>restart</Link>
            </div>
        </div>
    )

}