import React,{useState} from "react";

const DayOneCounter=()=>{
    const [sum,setSum] = useState(0);

    const incrementHandler=()=>{
        setSum(sum + 1)
    }

    const decrementHandler=()=>{
        if(sum> 0){
            setSum(sum -1 );
        }
    }
    return(
        <div className="mainbody">
            <div className="count">
                <h3>{sum}</h3>
            </div>
            <div className="functionbody">
                <button onClick={incrementHandler} className="increment">Increment</button>|<button className="decrement" onClick={decrementHandler}>Decrement</button>
            </div>
        </div>
    );
}

export default DayOneCounter