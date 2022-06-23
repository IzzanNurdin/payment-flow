import React from "react";
import styled from "styled-components";

const Input = styled.div`
  border: 1px solid #cccccc;
  padding: 20px 15px;
  position: relative;

  textarea {
    border: none;
    font-family: Inter;
    margin-top: 8px;
    height: 80px;
    width: 100%;
    resize: none;
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

  span {
    position: absolute;
    right: 12px;
    bottom: 8px;
    color: #999999;
  }
`;

const InputTextArea = ({ placeholder, label, watch, register, required }) => {
  const watcher = watch(label);

  React.useEffect(() => {
    localStorage.setItem(label, watcher);
  }, [label, watcher]);

  return (
    <Input>
      {watcher && <label htmlFor={label}>{placeholder}</label>}
      <textarea
        id={label}
        rows={12}
        maxLength={120}
        placeholder={placeholder}
        {...register(label, { required })}
      />
      <span>{watcher ? watcher.length : 0}/120</span>
    </Input>
  );
};

export default InputTextArea;
