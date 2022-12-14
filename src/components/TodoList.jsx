import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const TodoListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 18px;
`;

const Title = styled.div`
  font-size: 30px;
  color: rgb(236, 236, 236);
  margin: 20px 0px;
`;

const Body = styled.div`
  padding: 0px 20px 26px;
`;

function TodoList({ isActive, todos, setTodos }) {
  return (
    <Body>
      <Title>{isActive ? "Working..🔥" : "Done..!🎉"}</Title>
      <TodoListWrapper>
        {todos
          .filter((todo) => !todo.isDone === isActive)
          .map((todo) => {
            return (
              <Todo
                todo={todo}
                isActive={isActive}
                setTodos={setTodos}
                key={todo.id}
              />
            );
          })}
      </TodoListWrapper>
    </Body>
  );
}

export default TodoList;
