import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchdata } from "../../reduxtodo/action";
import {TodoCard} from "./TodoCard"


export const Todo = () => {
  const { isAuth, token } = useSelector((state) => state.auth);
  const { todo } = useSelector((state) => state.todo);
  console.log("todos", todo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggle, setToggle] = React.useState(false);

  const [datatodo,setDataTodo] = React.useState([])
  const [datainprogress,setDataInProgress] = React.useState([])
  const [datadone,setDataDone] = React.useState([])


  React.useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
    
  }, [isAuth]);
  // filter data

  React.useEffect(() => {
    fetchdata(dispatch)
    const tododata = todo[0].filter((item) => item.todostatus === "todo");
    setDataTodo(tododata)
    console.log('tododata',tododata);
    const inprogressdata = todo[0].filter(
      (item) => item.todostatus === "inprogress"
    );
    setDataInProgress([...inprogressdata])
    const donedata = todo[0].filter((item) => item.todostatus === "done");
    setDataDone([...donedata]);
  },[]);
  


  return (
    <div style={{textAlign: 'center',border: "1px solid black"}}>
      <button onClick={() => navigate("create-todo")}>Create Todo</button>
      <br />
      <h1>Todos</h1>
      <div style={{width: "80%",margin:'auto',display:'flex',gap:"25px",}}>
        <div>
          <h2>Todosssss</h2>
          {datatodo.map((item,ind)=>{
            // console.log(item,ind)
            return <TodoCard key={item.id} item={item} />
          })}
        </div>
        <div>
          <h2>In progress</h2>
          {datainprogress.map((item,ind)=>{
            // console.log(item,ind)
            return <TodoCard key={item.id} item={item} />
          })}
        </div>
        <div>
          <h2>Done</h2>
          {datadone.map((item,ind)=>{
            // console.log(item,ind)
            return <TodoCard key={item.id} item={item} />
          })}
        </div>
      </div>
    </div>
  );
};
