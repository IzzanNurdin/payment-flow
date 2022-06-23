import React from "react";
import styled from "styled-components";
import InnerLayout from "./InnerLayout";
import Stepper from "./Stepper";

const Wrapper = styled.div`
  padding: 55px 50px;
  background: #fffae6;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Layout = ({ children, currentStep }) => {
  return (
    <Wrapper>
      <Stepper currentStep={currentStep} />
      <InnerLayout>{children}</InnerLayout>
    </Wrapper>
  );
};

export default Layout;
