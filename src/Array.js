import { useState } from "react"
import "./App.css";
function Array(){

    const [arr,setArr] = useState([10,20,30,40,50,60,70,80,90,100]);
    return(
    <div className="App">
      <img src="img/w3.jpg"/>
    <h1>Show Array Data :</h1>
    {arr.map((data,index)=>{
       return<b>
         {data}&nbsp;&nbsp;
       
      
       
       </b> 
        
      }  )} 
      
    
    </div> 

    )
}
export default Array;