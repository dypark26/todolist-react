import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: black;
  color: rgb(236, 236, 236);
`;

const InputButton = styled.input`
  border: none;
  background-color: rgb(57, 57, 57);
  color: rgb(236, 236, 236);
  border-radius: 10px;
  padding: 6px 10px 6px;
  width: 200px;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
`;

const SubmitButton = styled.button`
  backgroundcolor: color;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
  border: none;
  height: 40px;
  width: 100px;
  cursor: pointer;
`;

function Input({ setTodos }) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newTodoList = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };

    setTodos((prev) => {
      return [...prev, newTodoList];
    });

    setTitle("");
    setContents("");
  };

  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const handleTitleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsOnChange = (event) => {
    setContents(event.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <InputWrapper>
        <label>제목</label>
        <InputButton
          value={title}
          onChange={handleTitleOnChange}
          type="text"
          placeholder="어떤것을 해볼까요?"
        />
        <label>내용</label>
        <InputButton
          value={contents}
          onChange={handleContentsOnChange}
          type="text"
          placeholder="설명을 적어주세요!!"
        />
        <SubmitButton backgroundColor="rgb(33, 174, 255)">추가</SubmitButton>
      </InputWrapper>
    </form>
  );
}

export default Input;
