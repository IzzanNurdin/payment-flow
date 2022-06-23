import styled from "styled-components";

export const ThirdStepWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

export const LeftComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-right: 30px;
  height: 500px;
  border-right: 1px solid #ff8a0030;
`;

export const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  p {
    margin: 0;
  }

  span {
    margin: 0;
    color: #00000060;
  }
`;

export const Heading1 = styled.h1`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #ff8a00;
`;
