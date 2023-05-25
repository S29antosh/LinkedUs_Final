import React  from 'react';
import { ReactDOM } from 'react-dom/client';

export default function(props)
{
    return(
        <form className="Location">
              <h2>{props.title}</h2>
              <input type="radio" id="radio1" ></input>
              <label for="html">{props.value1}</label><br></br>
              <input type="radio" id="radio2" ></input>
              <label for="css">{props.value2}</label><br></br>
              <input type="radio" id="radio3" ></input>
              <label for="javascript">{props.value3}</label><br></br>
        </form>
        
    );
}