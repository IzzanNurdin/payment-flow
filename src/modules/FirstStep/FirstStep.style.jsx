import styled from "styled-components";

export const FirstStepWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

export const LeftComponent = styled.div`
  padding-right: 30px;
  height: 500px;
  border-right: 1px solid #ff8a0030;
`;

export const LeftHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading1 = styled.h1`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #ff8a00;
`;

export const Form = styled.form`
  display: grid;
  margin-top: 36px;
  grid-template-columns: 1.5fr 1fr;
  gap: 30px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
