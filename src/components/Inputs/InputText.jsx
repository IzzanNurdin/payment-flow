import React from "react";
import styled from "styled-components";

const Input = styled.div`
  border: 1px solid #cccccc;
  padding: 20px 15px;
  position: relative;

  input {
    border: none;
    height: 40px;
    width: 100%;
    background: #ffffff;
    outline: 0;
    font-size: 16px;
    ::placeholder {
      color: #000000;
      opacity: 0.4;
    }
  }

  label {
    position: absolute;
    top: 9px;
    font-size: 13px;
  }
`;

const InputText = ({ placeholder, label, error, watch, register, params }) => {
  const watcher = watch(label);

  React.useEffect(() => {
    localStorage.setItem(label, watcher);
  }, [label, watcher]);

  return (
    <Input>
      {watcher && <label htmlFor={label}>{placeholder}</label>}
      <input
        id={label}
        placeholder={placeholder}
        {...register(label, params)}
      />
    </Input>
  );
};

export default InputText;
