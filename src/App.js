import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { Reset } from "styled-reset";

const BackGround = styled.div`
  background-color: rgb(36, 36, 36);
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  height: 100vh;
  min-width: 800px;
  max-width: 1200px;
`;

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <BackGround>
      <Reset />
      <Header>My Todo List</Header>
      <Input setTodos={setTodos}></Input>
      <TodoList isActive={true} todos={todos} setTodos={setTodos}></TodoList>
      <TodoList isActive={false} todos={todos} setTodos={setTodos}></TodoList>
    </BackGround>
  );
}

// const intialState = [
//   { title: "title1", contents: "contents1", isDone: false, id: uuidv4() },
//   { title: "title2", contents: "contents2", isDone: false, id: uuidv4() },
//   { title: "title3", contents: "contents3", isDone: true, id: uuidv4() },
// ];

export default App;
