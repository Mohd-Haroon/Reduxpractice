import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Todo } from "../todos/Todo";
import { Sidebar } from "./SideBar";
import {Routess} from "../../routes/Routes"

export const Home = () => {
  const { isAuth, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  
  return (
    <div style={{ display: "flex",width: "100%",justifyContent: "center"}}>
      <Sidebar />
      <div style={{ width: "100%", margin:"auto"}}>
        <Routess/>
      </div>
    </div>
  );
};
