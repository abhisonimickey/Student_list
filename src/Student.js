import { useState } from "react";

function Student() {
  const [std, setStd] = useState([
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
      roll: 103,
      name: "Ciku",
      cls: "11th",
      p: 34,
      c:25,
      m: 6,
      fees: 323.45,
      mobile: "8934567890",},
  ]);
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "red" }}>
        Show Student Data :{" "}
      </h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
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
                    <button>Edit</button>
                    &nbsp;&nbsp;||&nbs;&nbsp;
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Student;