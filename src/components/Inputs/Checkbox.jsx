import React from "react";
import styled from "styled-components";
import { MdCheck } from "react-icons/md";

const Wrapper = styled.button`
  all: unset;
  heigth: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.div.attrs((props) => ({ checked: props.checked }))`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => (props.checked ? "#1BD97B" : "#999999")};
  width: 20px;
  height: 20px;
`;

const Checkbox = ({ text, checked, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Input checked={checked}>
        {checked && <MdCheck fill="#1BD97B" width={20} />}
      </Input>{" "}
      {text}
    </Wrapper>
  );
};

export default Checkbox;
