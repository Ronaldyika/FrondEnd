import React,{useState} from "react";

const Calculator =()=>{
    const [btnOne,setBtnOne] = useState(1);
    const [btnTwo,setBtnTwo] = useState();
    const [btnThree,setBtnThree] = useState();
    const [btnFour,setBtnFour] = useState();
    const [btnFive,setBtnFive] = useState();
    const [btnSix,setBtnSix] = useState();
    const [btnSeven,setBtnSeven] = useState();
    const [btnEight,setBtnEight] = useState();
    const [btnNine,setBtnNine] = useState();
    const [btnSubtraction,setSubtraction] = useState();
    const [btnAddition,setBtnAddition] = useState();
    const [btnMultiplication,setBtnMultiplication] = useState();
    const [btnFact,setBtnFact] = useState();
    const [btnClear,setBtnClear] = useState();
    const [btnEqual,setBtnEqual] = useState();
    const [btnDisplay,setBtnDisplay] = useState(0);
    
    const handleclick=()=>{
        setBtnDisplay(btnOne);

    }
    return(
        <div className="mainContent">
            <div className="screenDisplay">
                {btnDisplay}
            </div>
            <div className="btnContains">
                <div className="buttons">
                    <button>0</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
                <div className="buttons">
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                </div>
                <div className="buttons">
                    <button>8</button>
                    <button>9</button>
                    <button>!</button>
                    <button>CE</button>
                </div>
                <div className="buttons">
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>=</button>
                </div>

            </div>

        </div>
    )
}


export default Calculator