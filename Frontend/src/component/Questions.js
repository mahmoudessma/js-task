import '../style/practice.css'
import React from 'react'
import { useSelector } from 'react-redux'
export default function Question({onChecked}) {

    const questions = useSelector(state =>state.questions.queue[state.questions.trace])
    
    function onSelect(ans)
    {
        onChecked(ans)   
    }
    
  return (
    <div className='questions'>
        <p><strong>{questions?.word}</strong></p>
        
        <ul key={questions?.id}>
            <li>
                <input type="radio" value="verb" name="options" id="verb" onChange={()=>onSelect('verb')}  />
                <label>verb</label>
            </li>
            <hr></hr>
            <li>
                <input type="radio" value="noun" name="options" id="noun" onChange={()=>onSelect('noun')} />
                <label>noun</label>
            </li>
            <hr></hr>
            <li>
                <input type="radio" value="adjective" name="options" id="adjective" onChange={()=>onSelect('adjective')}/>
                <label>adjective</label>
            </li>
            <hr></hr>
            <li>
                <input type="radio" value="adverb" name="options" id="adverb" onChange={()=>onSelect('adverb')} />
                <label>adverb</label>
            </li>
            <hr></hr>
        </ul>
        
    </div>
  )
  }
