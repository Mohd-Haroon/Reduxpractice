import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchdata } from "../../reduxtodo/action.js";
import { useDispatch } from "react-redux";

export const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = React.useState({});

  const handleChange = (e) => {
    const inputName = e.target.name;
    setStatus({ ...status, [inputName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    datapost()
    console.log("iddd", id);
    console.log({ ...status });
  };

  let datapost = async (e) => {
    let res = await fetch(`http://localhost:8080/todo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...status }),
    });
    let data = await res.json();
    console.log(data);
    fetchdata(dispatch);
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ border: "1px solid black" }}>
          <input
            type="radio"
            value="todo"
            id="Todo"
            name="todostatus"
            onChange={handleChange}
          />
          <label htmlFor="Todo">Todo</label> <br />
          <input
            type="radio"
            value="inprogress"
            id="Inprogress"
            name="todostatus"
            onChange={handleChange}
          />
          <label htmlFor="Inprogress">In Progress</label> <br />
          <input
            type="radio"
            value="done"
            id="Done"
            name="todostatus"
            onChange={handleChange}
          />
          <label htmlFor="Done">Done</label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
