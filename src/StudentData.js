import { useRef ,useState } from "react";

function Student() {
  var roll =useRef();
  var name =useRef();
  var cls =useRef();
  var p =useRef();
  var c =useRef();
  var m =useRef();
  var fees =useRef();
  var mobile =useRef();
  const[inde,setInde]=useState()
const [std, setStd] =useState([
  {
    roll: 101,
    name: "Mahi",
    cls: "11th",
    p: 32,
    c: 44,
    m: 45,
    fees: 123.45,
    mobile: "1234567890",
  },
  {
    roll: 102,
    name: "Chiku",
    cls: "12th",
    p: 90,
    c: 90,
    m: 49,
    fees: 223.45,
    mobile: "9234567890",
  },
  {
    roll: 103,
    name: "Piku",
    cls: "11th",
    p: 34,
    c: 41,
    m: 47,
    fees: 323.45,
    mobile: "8234567890",
  },
  {
    roll: 104,
    name: "Ciku",
    cls: "11th",
    p: 34,
    c:25,
    m: 6,
    fees: 323.45,
    mobile: "89346767890",},
] ,{checkstatus:false,}) 

var rol =useRef();
var nam =useRef();
var clss =useRef();
var pp =useRef();
var cc=useRef();
var mm =useRef();
var feess =useRef();
var mobilee =useRef();



 var addStudent=(event)=>{
    event.preventDefault()
    var rno =roll.current.value;
    var nm =name.current.value;
    var mob =mobile.current.value;
    var fs =fees.current.value;
    var cs =cls.current.value*1;
    var ph =p.current.value*1;
    var ch =c.current.value*1;
    var ma =m.current.value;
 console.log(rno+" :"+nm+":"+mob+":"+fs+":"+cs+":"+ph+":"+ch+":"+ma);
    var obj ={roll:rno,name:nm,cls:cs,p:ph,c:ch,m:ma,fees:fs,mobile:mob}

    setStd([...std,obj])
   }
  
   var editStudentData =(rno)=>{
    
     for (var st of std)
     {
        if(st.roll == rno)
        {
          rol.current.value=st.roll
          nam.current.value=st.name
          mobilee.current.value=st.mobile
          pp.current.value=st.p
          cc.current.value=st.c
          mm.current.value=st.m
          feess.current.value=st.fees
          var index=std.indexOf(st)
          setInde(index)
        }
     }
   }
  var deleteStudentData =(index) => {
    alert("are you sure");
    alert(std);
    const updateStudents = [...std];
    updateStudents.splice(index, 1);
    setStd(updateStudents);
  };
   var UpdateStudent=(event)=>{
    event.preventDefault()
    var rnoo =rol.current.value;
    var nmm =nam.current.value;
    var mobb =mobilee.current.value;
    var fss =feess.current.value;
    var css =clss.current.value;
    var phh =pp.current.value*1;
    var chh =cc.current.value*1;
    var maa =mm.current.value*1;
    var obj ={roll:rnoo,name:nmm,cls:css,p:phh,c:chh,m:maa,fees:fss,mobile:mobb}
    var UpdateStu=[...std]
    UpdateStu.splice(inde,1,obj)
    setStd(UpdateStu)
 }
   var checkValidation=(event)=>{
  var data =event.target.value;
  console.log(data);
  for (var st of std)
  {
      //console.log(st)
     if(data == st.roll || data == st.mobile || data== "")

      
    return({checkstatus:true});
      
  }
} 
 return (
    <div className='container' style={{background:"yellow"}}>
      <marquee>  <h1 style={{textAlign:"center",color:"red"}}>Enter Student Records : 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enter Student Records :
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Enter Student Records :</h1>
     </marquee>
              <form onSubmit={addStudent}>
                <input type="number" placeholder='Enter Roll no' ref={roll} 
              onBlur={checkValidation}  onFocus={()=>({checkstatus:false})}  />
                &nbsp;&nbsp;
                <input type="text" placeholder='Enter Name no' ref={name} />
                &nbsp;&nbsp;&ensp;
                <select ref={cls} >
                  <option value=""  required>Select Class</option>
                  <option value="11th" >"11th"</option>
                  <option value="12th">"12th"</option>
                </select>
                <br></br>
                <input type="number" placeholder='Enter phy no' 
                min={0} max={100} ref={p} required
                />
                &nbsp;&nbsp;
                <input type="number"  placeholder='Enter chemstry no'
                min={0} max={100}  ref={c} required
                />
                &nbsp;&nbsp;
                <input type="number" placeholder='Enter math no'
                min={0} max={100}  ref={m} required
                />
                &nbsp;&nbsp;
                <input type="number" placeholder='Enter fees no'
                min={5000} max={61000}  ref={fees} required
                />
                &nbsp;&nbsp;
                <input type="number" placeholder='Enter mobile no'
                min={6000000000} max={9999999999} ref={mobile} required
                 />
                &nbsp;&nbsp;
                <br></br>
                <hr></hr>
                <button className='btn btn-primary form-control' >Add Student edit</button>
                
              </form>
              <hr></hr>
              
      <div>
        <table className="table table-bordered table-striped table-hover" >
          <thead>
            <tr>
              <td>Id</td>
              <td>Roll</td>
              <td>Name</td>
              <td>Class</td>
              <td>Fees</td>
              <td>Mobile</td>
              <td>Phy</td>
              <td>Chem</td>
              <td>Maths</td>
              <td>Total</td>
              <td>Per</td>
              <td>Grade</td>
              <td>Operation</td>
            </tr>
          </thead>
          <tbody>
            {std.map((data, index) => {
              var total = data.p + data.c + data.m;
              var per =(total/3).toFixed(3);
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.roll}</td>
                  <td>{data.name}</td>
                  <td>{data.cls}</td>
                  <td>{data.fees}</td>
                  <td>{data.mobile}</td>
                  <td>{data.p}</td>
                  <td>{data.c}</td>
                  <td>{data.m}</td>
                  <td>{total}</td>
                  <td>{per}</td>
                  <td>{(per>=60) ? "A Grade" :((per>=55) ? "B Grade" : (per>=45) ? "C Grade" :
                  (per>=33) ? "D Grade" : "Fail kase ho gaya."
                  )}</td>
                  <td>
                    <button className="btn btn-warning" onClick={()=>editStudentData(data.roll)}>Edit</button>
                    &nbsp;&nbsp;||&nbsp;&nbsp;
                    <button className="btn btn-danger" onClick={()=>deleteStudentData(index)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


      <div className='container'>
        <h1 style={{textAlign:"center",color:"red"}}>Enter Student Records :</h1>
              <form onSubmit={UpdateStudent} style={{background:"powderblue",}}>
                <input type="number" placeholder='Enter Roll no'  ref={rol} 
                 disabled
                 />
                &nbsp;&nbsp;
                <input type="text" placeholder='Enter Name no' ref={nam}
                />
                &nbsp;&nbsp;
                <select ref={clss} >
                  <option value="">Select Class</option>
                  <option value="11th">"11th"</option>
                  <option value="12th">"12th"</option>
                </select>
                <br></br>
                <input type="number" placeholder='Enter phy no' min={0} max={100} ref={pp} required />
                &nbsp;&nbsp;
                <input type="number"  placeholder='Enter chemstry no'  min={0} max={100} ref={cc} required />
                &nbsp;&nbsp;
                <input type="number" placeholder='Enter math no'  min={0} max={100}  ref={mm} required />
                &nbsp;&nbsp;
                <input type="number" placeholder='Enter fees no'  min={5000} max={61000} ref={feess}  required />
                &nbsp;&nbsp;
                <input type="number" placeholder='Enter mobile no' ref={mobilee} min={6000000000} max={9999999999} required
                  />
                &nbsp;&nbsp;
                <br></br>
                <hr></hr>
                <button className='btn btn-info form-control'   >Update Student edit</button>
                
              </form>
              <hr></hr>
     </div>
    </div>
  )
}
export default Student;