import React from "react";
import styled from "styled-components";
import { MdChevronRight } from "react-icons/md";

const Wrapper = styled.div`
  position: absolute;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  top: 20px;
  left: 0;
  right: 0;
  background: #fffae6;
  border-radius: 35px;
  padding: 20px 38px;
  align-items: center;
  display: flex;
  gap: 20px;
`;

const NumberStep = styled.div.attrs((props) => ({ current: props.current }))`
  border-radius: 50%;
  background: ${(props) => (props.current ? "#ff8a00" : "#ff8a0020")};
  color: ${(props) => (props.current ? "#ffffff" : "#ff8a00")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ff8a00;
`;

const Stepper = ({ currentStep }) => {
  return (
    <Wrapper>
      <Step>
        <NumberStep
          current={currentStep === 1 || currentStep === 2 || currentStep === 3}
        >
          1
        </NumberStep>
        Delivery
      </Step>
      <MdChevronRight fill="#FF8A00" />
      <Step>
        <NumberStep>2</NumberStep>
        Payment
      </Step>
      <MdChevronRight fill="#FF8A00" />
      <Step>
        <NumberStep>3</NumberStep>
        Finish
      </Step>
    </Wrapper>
  );
};

export default Stepper;
