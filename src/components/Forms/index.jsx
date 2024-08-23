import React from "react";

import { StyledInput, StyledBox } from "./styles";

import { Heading } from "@chakra-ui/react";

let InputComponent = ({ inp_type }) => {
  return (
    <>
      <StyledBox>
        <Heading children={inp_type} as="h6" size="xs" />
        <StyledInput placeholder={`${inp_type}`} />
      </StyledBox>
    </>
  );
};

export default InputComponent;
