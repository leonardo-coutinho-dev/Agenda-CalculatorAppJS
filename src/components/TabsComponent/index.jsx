import React, { useState } from "react";

import {
  TabPanel,
  Image,
  Input,
  Text,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

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
  StyledBtnBox,
  StyledCleanFormBtn,
  StyledCreateContactBtn,
} from "./styles";

import InputComponent from "../Forms/index";

// Person class to represent the contact data
class Person {
  constructor(
    name,
    surname,
    dateOfBirth,
    phoneMobile,
    phoneLandline,
    phoneWork,
    street,
    number,
    city,
    country,
    postalCode,
    email,
    photo
  ) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.phoneMobile = phoneMobile;
    this.phoneLandline = phoneLandline;
    this.phoneWork = phoneWork;
    this.street = street;
    this.number = number;
    this.city = city;
    this.country = country;
    this.postalCode = postalCode;
    this.email = email;
    this.photo = photo;
  }
}

const TabsComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    phoneMobile: "",
    phoneLandline: "",
    phoneWork: "",
    street: "",
    number: "",
    city: "",
    country: "",
    postalCode: "",
    email: "",
    photo: null, // Added photo to the formData state
  });

  const [contacts, setContacts] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddContacts = (object) => {
    setContacts((prevFormData) => [...prevFormData, object]);
  };

  const handleSubmit = () => {
    const newPerson = new Person(
      formData.name,
      formData.surname,
      formData.dateOfBirth,
      formData.phoneMobile,
      formData.phoneLandline,
      formData.phoneWork,
      formData.street,
      formData.number,
      formData.city,
      formData.country,
      formData.postalCode,
      formData.email,
      formData.photo // Include photo in the Person object
    );
    handleAddContacts(newPerson);
    console.log(newPerson, contacts);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      handleInputChange("photo", imageUrl); // Update formData with the image URL
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
          /** Primeiro painel */
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
              <InputComponent
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                inp_type={"Name"}
              />
              <InputComponent
                value={formData.surname}
                onChange={(e) => handleInputChange("surname", e.target.value)}
                inp_type={"Surname"}
              />
            </InputWrapper>
            <InputWrapper>
              <InputComponent
                value={formData.dateOfBirth}
                onChange={(e) =>
                  handleInputChange("dateOfBirth", e.target.value)
                } // Updated to match formData key
                inp_type={"Date of birth"}
              />
              <InputComponent
                value={formData.phoneMobile}
                onChange={(e) =>
                  handleInputChange("phoneMobile", e.target.value)
                } // Updated to match formData key
                inp_type={"Phone - Mobile"}
              />
            </InputWrapper>
            <InputWrapper>
              <InputComponent
                value={formData.phoneLandline}
                onChange={(e) =>
                  handleInputChange("phoneLandline", e.target.value)
                } // Updated to match formData key
                inp_type={"Phone - Landline"}
              />
              <InputComponent
                value={formData.phoneWork}
                onChange={(e) => handleInputChange("phoneWork", e.target.value)} // Updated to match formData key
                inp_type={"Phone - Work"}
              />
            </InputWrapper>
            <InputWrapper>
              <InputComponent
                value={formData.street}
                onChange={(e) => handleInputChange("street", e.target.value)}
                inp_type={"Street"}
              />
              <InputComponent
                value={formData.number}
                onChange={(e) => handleInputChange("number", e.target.value)}
                inp_type={"Number"}
              />
            </InputWrapper>
            <InputWrapper>
              <InputComponent
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                inp_type={"City"}
              />
              <InputComponent
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                inp_type={"Country"}
              />
            </InputWrapper>
            <InputWrapper>
              <InputComponent
                value={formData.postalCode}
                onChange={(e) =>
                  handleInputChange("postalCode", e.target.value)
                } // Updated to match formData key
                inp_type={"Postal code"}
              />
              <InputComponent
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)} // Updated to match formData key
                inp_type={"E-mail"}
              />
            </InputWrapper>
            <StyledBtnBox
              borderWidth={2}
              borderRadius="sm"
              boxShadow="lg"
              mx="auto"
              mt={0}
            >
              <StyledCleanFormBtn>Clear</StyledCleanFormBtn>
              <StyledCreateContactBtn onClick={handleSubmit}>
                Add contact
              </StyledCreateContactBtn>
            </StyledBtnBox>
          </StyledTabPanel>
          /** Segundo painel */
          <TabPanel>
            <Card>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </TabPanel>
          /** Terceiro painel */
          <TabPanel>
            <StyledParagraph>Calculator(i)</StyledParagraph>
          </TabPanel>
        </StyledTabPanels>
      </StyledTabs>
    </Container>
  );
};

export default TabsComponent;
