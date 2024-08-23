import React, { useState } from "react";

import { TabPanel, Image, Input, Box, Text, VStack } from "@chakra-ui/react";

import { AttachmentIcon } from "@chakra-ui/icons";

import {
  Container,
  ContainerPhoto,
  StyledTabs,
  StyledTabList,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
  StyledParagraph,
  InputWrapper,
  StyledBtnCFile,
} from "./styles";

import InputComponent from "../Forms/index";

const TabsComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      // You can also prepare the file for uploading to the backend here.
    }
  };
  return (
    <Container>
      <StyledTabs>
        <StyledTabList>
          <StyledTab>Add contact</StyledTab>
          <StyledTab>All contacts</StyledTab>
          <StyledTab>Calculator</StyledTab>
        </StyledTabList>
        <StyledTabPanels>
          <StyledTabPanel>
            <ContainerPhoto
              p={2}
              borderWidth={2}
              borderRadius="sm"
              boxShadow="lg"
              mx="auto"
              mt={0}
              mb={3}
            >
              <VStack spacing={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Photo
                </Text>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  display="none"
                  id="file-input"
                />

                <StyledBtnCFile as="label" htmlFor="file-input">
                  Select <AttachmentIcon />
                </StyledBtnCFile>
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    alt="Selected"
                    boxSize="200px"
                    objectFit="cover"
                    borderRadius="md"
                    boxShadow="md"
                  />
                ) : (
                  <Image
                    src="gibbresh.png"
                    fallbackSrc="https://via.placeholder.com/200"
                  />
                )}
              </VStack>
            </ContainerPhoto>
            <InputWrapper>
              <InputComponent inp_type={"Name"} />
              <InputComponent inp_type={"Surname"} />
            </InputWrapper>
            <InputWrapper>
              <InputComponent inp_type={"Date of birth"} />
              <InputComponent inp_type={"Phone - Mobile"} />
            </InputWrapper>
            <InputWrapper>
              <InputComponent inp_type={"Phone - Landline"} />
              <InputComponent inp_type={"Phone - Work"} />
            </InputWrapper>
            <InputWrapper>
              <InputComponent inp_type={"Street"} />
              <InputComponent inp_type={"Number"} />
            </InputWrapper>
            <InputWrapper>
              <InputComponent inp_type={"City"} />
              <InputComponent inp_type={"Country"} />
            </InputWrapper>
            <InputWrapper>
              <InputComponent inp_type={"Postal code"} />
              <InputComponent inp_type={"E-mail"} />
            </InputWrapper>
          </StyledTabPanel>
          <TabPanel>
            <StyledParagraph>All contacts(i)</StyledParagraph>
          </TabPanel>
          <TabPanel>
            <StyledParagraph>Calculator(i)</StyledParagraph>
          </TabPanel>
        </StyledTabPanels>
      </StyledTabs>
    </Container>
  );
};

export default TabsComponent;
