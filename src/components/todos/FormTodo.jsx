import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gettodo } from "../../reduxtodo/action.js";

export const FormTodo = () => {
  const { isAuth, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subtask, setSub] = React.useState({});
  const [subarr, setsubarr] = React.useState([]);

  const [formData, setFormData] = React.useState({
    todoofficial: false,
    todoothers: false,
    todopersonal: false,
    subarr,
  });
  React.useEffect(() => {
    if (!token) {
      return navigate("/login");
    }

  }, [token]);

  const handleChange = (e) => {
    const inputName = e.target.name;
    // console.log(inputName, e.target.value);

    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [inputName]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    // const {name,password} = e.target.value;

    e.preventDefault();
    console.log(formData);
    gettodo(dispatch, formData);

    //fetch(url,{method:post,body: JSON.stringify(formData)})
  };

  const subtaskkk = (e) => {
    e.preventDefault();
    console.log(subtask);
    console.log(subarr);
    // setSub([...subtask,e.target.value])
    // setsubarr([...subarr,subtask])

    setsubarr([subtask, ...subarr]);
    console.log(subarr);

    setFormData({ ...formData, subarr });
  };
  // console.log(subarr);
  return (
    <>
      <button onClick={() => navigate("/")}>Todos</button>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <div className="">
              <input
                type="text"
                name="title"
                placeholder="TITLE"
                onChange={handleChange}
              />
              <br />

              <input
                type="text"
                name="description"
                placeholder="DESCRIPTION"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <input
                type="text"
                name="subtask"
                placeholder="SUBTASKS"
                onChange={(e) => setSub(e.target.value)}
              />
              <button onClick={subtaskkk}>addsub</button>
              <div>
                {subarr.map((item, ind) => {
                  return <h4 key={ind}>{item}</h4>;
                })}
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">Date</label>
              <input type="date" name="date" onChange={handleChange} />
            </div>
            {/* <input type="submit" /> */}
            <button type="submit">Create Form</button>
          </div>
        </div>

        {/* subtask */}

        {/* typetodo */}
        <div>
          <div style={{border: "1px solid black"}}>
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
          <div style={{marginTop:"20px",border: "1px solid black"}}>
            <div>
            <input
              type="checkbox"
              name="todoofficial"
              onChange={handleChange}
            />
            <label htmlFor="">Official</label>
            <br />
            <input
              type="checkbox"
              name="todopersonal"
              onChange={handleChange}
            />
            <label htmlFor="">Personal</label>
            <br />
            <input type="checkbox" name="todoothers" onChange={handleChange} />
            <label htmlFor="">Others</label>
            </div>
            
          </div>
        </div>
      </form>
    </>
  );
};
