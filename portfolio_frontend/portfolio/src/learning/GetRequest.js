import React ,{useState} from "react";
import { json } from "react-router-dom";

const GetRequest=()=>{

    const [Data,setData] = useState([])

    const handleFetch=async()=>{
        try{
            const res = await fetch("http://127.0.0.1:8000/api/profile/",{
                headers:{},
            });
            if(!res.ok){
                console.log('fetch error')
            }

            const jsonData = await res.json()

            setData(jsonData);
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            {
                Data.length?
                Data.map(info => <div key={info.id}>{info.name} my email is {info.email}</div>):
                null
            }
            <div>
                <button onClick={handleFetch}>fetch Data</button>
            </div>
        </div>
    );
}
export default GetRequest