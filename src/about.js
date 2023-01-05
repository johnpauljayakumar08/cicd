import React,{useState} from "react";
import dog from './download.jpg'

function About(){
    // const [variable_name,setVariable_name]=useState(value)
    // const [count,setCount]=useState([]);
    const [count,setCount]=useState(0);
    function counter(){
        setCount(count+20);
    }
    return(
       <div>
           
            {/* <h1>hii</h1>
            <h1>i am johnpaul</h1> */}
            <h1>{count}</h1>
            {/* <img src={dog}/> */}
            <button onClick={counter}>Add</button>
            <button onClick={()=>setCount(count-10)}>sub</button>
            <button onClick={()=>setCount(count*0)}>reset</button>
       </div>
    );
}
export default About;