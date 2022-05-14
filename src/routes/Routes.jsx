import React from "react";
import { Routes, Route } from "react-router-dom";
import { Todo } from "../components/todos/Todo";
import {LoginPage} from "../components/sidebar/LoginPage"
import {FormTodo} from "../components/todos/FormTodo"

export const Routess = () => {
  return (
    <div >
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-todo" element={<FormTodo />} />
      </Routes>
    </div>
  );
};
