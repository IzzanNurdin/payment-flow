import styled from "styled-components";

export const SecondStepWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

export const LeftComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-right: 30px;
  height: 500px;
  border-right: 1px solid #ff8a0030;
`;

export const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Heading1 = styled.h1`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #ff8a00;
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Card = styled.button.attrs((props) => ({
  selected: props.selected,
}))`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  width: 180px;
  height: 60px;
  padding: 20px;
  background: ${(props) => (props.selected ? "#1BD97B10" : "#ffffff")};
  border: ${(props) =>
    props.selected ? "2px solid #1BD97B" : "1px solid #cccccc"};
  font-family: Inter;

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }

  span {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #2d2a40;
  }
`;
