import React from "react";

import { TabPanel, TabPanels } from "@chakra-ui/react";

import {
  Container,
  StyledTabs,
  StyledTabList,
  StyledTab,
  StyledParagraph,
} from "./styles";

const TabsComponent = () => {
  return (
    <Container>
      <StyledTabs>
        <StyledTabList>
          <StyledTab>Add contact</StyledTab>
          <StyledTab>All contacts</StyledTab>
          <StyledTab>Calculator</StyledTab>
        </StyledTabList>
        <TabPanels>
          <TabPanel>
            <StyledParagraph>Add contact(i)</StyledParagraph>
          </TabPanel>
          <TabPanel>
            <StyledParagraph>All contacts(i)</StyledParagraph>
          </TabPanel>
          <TabPanel>
            <StyledParagraph>Calculator(i)</StyledParagraph>
          </TabPanel>
        </TabPanels>
      </StyledTabs>
    </Container>
  );
};

export default TabsComponent;
