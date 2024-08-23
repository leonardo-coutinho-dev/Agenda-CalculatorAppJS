import styled from "styled-components";

import {
  Box,
  Button,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

export const Container = styled.div`
  height: auto;
  width: 100%;
  padding: 8px;
  background-color: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTabs = styled(Tabs)`
  height: auto;
  width: 100%;
  background-color: #dad7cd;
  font-weight: bold;
`;

export const StyledTabList = styled(TabList)`
  padding: 10px !important;
  background-color: #0b090a !important;
  border-bottom: 8px solid #bbcbcb !important;
  justify-content: flex-end !important;
`;

export const StyledTab = styled(Tab)`
  font-family: "Nunito Sans", sans-serif !important;
  color: #0b090a !important;
  background-color: #d3d3d3 !important;
  font-weight: bold;
  border: none !important;
  margin: 0 !important;
  margin-right: 5px !important;

  &:hover {
    color: #d3d3d3 !important;
    background-color: #161a1d !important;
    font-weight: bold;
  }

  &[aria-selected="true"] {
    color: #d3d3d3 !important;
    background-color: #660708 !important;
  }
`;

export const StyledTabPanels = styled(TabPanels)`
  height: auto;
  padding: 2px !important;
  overflow-y: auto;
  @media (min-width: 992px) {
    height: calc(100vh - 84px);
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  padding: 12px !important;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  gap: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 8px;
    width: 650px;
  }
`;

export const StyledParagraph = styled.p`
  font-family: "Nunito Sans", sans-serif !important;
`;

// choose image for contact component:

export const ContainerPhoto = styled(Box)`
  width: 100%;
  @media (min-width: 992px) {
    width: 650px;
  }
`;

export const StyledBtnCFile = styled(Button)`
  background-color: #ebebeb;
  border: 2px solid #bbcbcb;
  color: #7c7c7c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  width: 200px;

  &:hover {
    background-color: #161a1d !important;
    color: #d3d3d3 !important;
    font-weight: bold;
  }

  &[aria-selected="true"] {
    background-color: #660708 !important;
    color: #d3d3d3 !important;
  }
`;
