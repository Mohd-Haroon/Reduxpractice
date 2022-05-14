import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { useDispatch,useSelector} from "react-redux";
import {logOut } from "../../auth/action.js"
import {fetchdata} from "../../reduxtodo/action"

export const Sidebar = () => {
  const [issidebar, setSide] = React.useState(false);
  const { todo } = useSelector((state) => state.todo);
  const [datatodo,setDataTodo] = React.useState(0)
  const [datainprogress,setDataInProgress] = React.useState(0)
  const [datadone,setDataDone] = React.useState(0)
  
    const dispatch = useDispatch()
    React.useEffect(() => {
      fetchdata(dispatch)
    const tododata = todo[0].filter((item) => item.todostatus === "todo");
    setDataTodo(tododata.length)
    console.log('tododatalength',tododata.length);
    const inprogressdata = todo[0].filter(
      (item) => item.todostatus === "inprogress"
    );
    setDataInProgress(inprogressdata.length)
    const donedata = todo[0].filter((item) => item.todostatus === "done");
    setDataDone(donedata.length);
    },[])

  return (
    <div
      style={{
        width: "30%",
        border: "1px solid black",
        alignContent: "center",
      }}
    >
      {issidebar ? (
        <div>
          <div style={{ width: "100%",height:'400px', border: "1px solid black" }}>
            <FaTimes onClick={() => setSide(!issidebar)} />
            <br />
            <h3>Todo Summary</h3>
            <div>
              
              <div style={{display:'flex',justifyContent:'space-around',border: "1px solid black" }}>
                <p>All</p> <p>{datatodo+datainprogress+datadone}</p>
              </div>
              <div style={{display:'flex',justifyContent:'space-around',border: "1px solid black" }}>
                <p>Personal</p> <p>{datatodo}</p>
              </div>
              <div style={{display:'flex',justifyContent:'space-around',border: "1px solid black" }}>
                <p>Official</p> <p>{datainprogress}</p>
              </div>
              <div style={{display:'flex',justifyContent:'space-around',border: "1px solid black" }}>
                <p>Others</p> <p>{datadone}</p>
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => dispatch(logOut())}>Logout</button>
          </div>
        </div>
      ) : (
        <div style={{ width: "95%", border: "1px solid black" }}>
          <button onClick={() => setSide(!issidebar)}>
            <FaBars />
          </button>
        </div>
      )}
    </div>
  );
};
