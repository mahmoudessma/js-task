import headerbg from './header-bg.jpg';
import '../style/Home.css'
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../Redux/ResultReducer";
function HomeScreen(){
    const dispatch = useDispatch();
    const inputref = useRef(null)
    // check if username is found or not
    function startquiz(){
        if(inputref.current?.value){
            dispatch(setUserId(inputref.current?.value))
        }
    }
    
    return (
        <div className='main'>
            
            <div className='header'>
              <p>Quiz App</p>
            </div>

            
            <form id="form">
                <input ref={inputref} type="text" className='username' placeholder="Username"/>
            </form>
            <div className="start">
                
                <Link to="/practice" className="btn" onClick={startquiz}>enter the exam</Link>

            </div>
        </div>
        
    )
}

export default HomeScreen;