import styled from "styled-components";

import { Tabs, TabList, Tab } from "@chakra-ui/react";

export const StyledTabs = styled(Tabs)`
  height: 100%;
  width: 100%;
  background-color: #dad7cd;
  font-weight: bold;
`;

export const StyledTabList = styled(TabList)`
  padding: 10px !important;
  background-color: #588157 !important;
  border-bottom: 6px solid #a3b18a !important;
  justify-content: flex-end !important;
`;

export const StyledTab = styled(Tab)`
  font-family: "Nunito Sans", sans-serif !important;
  color: #dad7cd !important;
  background-color: #344e41 !important;
  font-weight: bold;
  border: none !important;
  margin: 0 !important;
  margin-right: 5px !important;

  &:hover {
    color: #344e41 !important;
    background-color: #dad7cd !important;
    font-weight: bold;
  }

  &[aria-selected="true"] {
    color: #344e41 !important;
    background-color: #dad7cd !important;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px;
  background-color: #a3b18a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledParagraph = styled.p`
  font-family: "Nunito Sans", sans-serif !important;
`;
