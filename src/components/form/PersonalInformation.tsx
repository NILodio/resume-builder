import React, { useContext } from "react";
import { ResumeContext } from "../../App";
import {
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

const PersonalInformation = () => {
  const { resumeData, handleProfilePicture, handleChange } = useContext(ResumeContext);

  return (
    <FormControl as="fieldset" mb={8}>
      <Heading as="h2" size="md" mb={4}>
        Personal Information
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Full Name"
            name="name"
            value={resumeData.name}
            onChange={handleChange}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel htmlFor="position">Job Title</FormLabel>
          <Input
            id="position"
            type="text"
            placeholder="Job Title"
            name="position"
            value={resumeData.position}
            onChange={handleChange}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel htmlFor="contactInformation">Contact Information</FormLabel>
          <Input
            id="contactInformation"
            type="text"
            placeholder="Contact Information"
            name="contactInformation"
            value={resumeData.contactInformation}
            onChange={handleChange}
            minLength={10}
            maxLength={15}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={resumeData.email}
            onChange={handleChange}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input
            id="address"
            type="text"
            placeholder="Address"
            name="address"
            value={resumeData.address}
            onChange={handleChange}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel htmlFor="profileImage">Profile Picture</FormLabel>
          <Input
            id="profileImage"
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleProfilePicture}
            placeholder="Profile Picture"
          />
        </GridItem>
      </Grid>
    </FormControl>
  );
};

export default PersonalInformation;
