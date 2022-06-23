import React from "react";
import styled from "styled-components";
import { MdOutlineArrowBack } from "react-icons/md";

const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #000000;
  fill: #000000;
  cursor: pointer;

  &:hover {
    color: #444444;
    fill: #444444;
  }
`;

const BackTo = ({ destination, onClick }) => {
  return (
    <Button onClick={onClick}>
      <MdOutlineArrowBack />
      {`Back to ${destination}`}
    </Button>
  );
};

export default BackTo;
