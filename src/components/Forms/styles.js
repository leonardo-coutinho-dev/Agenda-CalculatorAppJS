import styled from "styled-components";

import { Input, Box } from "@chakra-ui/react";

export const StyledBox = styled(Box)`
  background-color: #f5f3f4;
  border: 1px solid #bbcbcb;
  height: auto;
  padding: 10px;
  width: 100%;
`;

export const StyledInput = styled(Input)`
  border: 2px solid #bbcbcb !important;
  border-radius: 0 !important;
  margin: 5px 0 0 !important;
  background-color: #dad7cd !important;

  &::placeholder {
    color: #262626;
    font-size: 12px;
    line-height: 18px;
    opacity: 1;
  }

  &:hover {
    background-color: #fafafa !important;
    border-color: #a3b18a !important;
    color: #000000 !important;
  }

  &:focus {
  }

  &:active {
  }

  &:disabled {
  }

  &::selection {
  }
`;
