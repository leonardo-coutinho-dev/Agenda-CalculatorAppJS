import React from "react";

import { StyledInput, StyledBox } from "./styles";

import { Heading } from "@chakra-ui/react";

let InputComponent = ({ inp_type, value, onChange }) => {
  return (
    <>
      <StyledBox>
        <Heading children={inp_type} as="h6" size="xs" />
        <StyledInput
          onChange={onChange}
          placeholder={`${inp_type}`}
          value={value}
        />
      </StyledBox>
    </>
  );
};

export default InputComponent;
