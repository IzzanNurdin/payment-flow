import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px 10px 30px 40px;
  background: #ffffff;
  border-radius: 4px;
  min-height: 550px;
  box-shadow: 2px 10px 20px 0px #ff8a001a;
`;

const InnerLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default InnerLayout;
