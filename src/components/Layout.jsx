import React from "react";
import styled from "styled-components";
import InnerLayout from "./InnerLayout";

const Wrapper = styled.div`
  padding: 55px 50px;
  background: #fffae6;
  width: 100vw;
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <InnerLayout>{children}</InnerLayout>
    </Wrapper>
  );
};

export default Layout;
