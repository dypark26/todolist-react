import React from "react";
import styled from "styled-components";

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  font-size: 20px;
  color: rgb(236, 236, 236);
`;

function Header({ children }) {
  return (
    <TopHeader>
      <p>{children}</p>
      <p>React</p>
    </TopHeader>
  );
}

export default Header;
