import {  useRef , useState } from "react"
function Array1(){
      var ele = useRef()
    const [arr,setArr] = useState([10,20,30,40,50,60,70,80,90]);
     var SendData = (event)=>{
        event.preventDefault();
        var data = ele.current.value;

        setArr([...arr,data]);
     }
    return<div>
    <h1>Show Array Data :</h1>
    <input type="text" placeholder="Enter any Value" ref={ele}/>
    &nbsp;&nbsp;
    <button onClick={SendData}>Add</button>
    {arr.map((data,index)=>{
       return<b>
       {data}&nbsp;&nbsp;
       
       </b> 
        
      }  )}
    
    </div> 
}
export default Array1;