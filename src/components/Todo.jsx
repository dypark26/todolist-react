import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  backgroundcolor: color;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
  border: none;
  height: 40px;
  width: calc(50vh - 4px);
  cursor: pointer;
`;

const TodoWrapper = styled.div`
  width: 250px;
  border: none;
  background-color: rgb(239, 239, 239);
  border-radius: 10px;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 16px;
`;

const TodoContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  h2 {
    font-size: 26px;
    font-weight: 700;
  }
`;

const TodoButttonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

function Todo({ todo, isActive, setTodos }) {
  const handeDeleteButtonOnclick = () => {
    setTodos((prev) => prev.filter((t) => t.id != todo.id));
  };

  const switchButtonOnClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === todo.id) {
          return { ...t, isDone: !todo.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <TodoWrapper>
      <TodoContentWrapper>
        <h2>{todo.title}</h2>
        <h>{todo.contents}</h>
      </TodoContentWrapper>
      <TodoButttonWrapper>
        <CustomButton
          onClick={switchButtonOnClick}
          backgroundColor="rgb(33, 174, 255)"
        >
          {isActive ? "완료" : "취소"}
        </CustomButton>
        <CustomButton
          onClick={handeDeleteButtonOnclick}
          backgroundColor="rgb(38, 38, 38)"
        >
          삭제
        </CustomButton>
      </TodoButttonWrapper>
    </TodoWrapper>
  );
}

export default Todo;
