// src/components/PersonalInformation.tsx
import React, { useContext } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import { ResumeContext } from '../../App';
import { ResumeContextType } from '../../types/resume';

const PersonalInformation: React.FC = () => {
  const { resumeData, handleChange } = useContext(ResumeContext) as ResumeContextType;

  return (
    <FormControl mb={3}>
      <Heading size="md" mb={3}>Information</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Full Name"
            name="name"
            value={resumeData ? resumeData.name : ''}
            onChange={handleChange}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <FormLabel htmlFor="position">Job Title</FormLabel>
          <Input
            id="position"
            type="text"
            placeholder="Job Title"
            name="position"
            value={resumeData ? resumeData.position : ''}
            onChange={handleChange}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <FormLabel htmlFor="contactInformation">Contact Information</FormLabel>
          <Input
            id="contactInformation"
            type="text"
            placeholder="Contact Information"
            name="contactInformation"
            value={resumeData ? resumeData.contactInformation : ''}
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
            value={resumeData ? resumeData.email : ''}
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
            value={resumeData ? resumeData.address : ''}
            onChange={handleChange}
          />
        </GridItem>
      </Grid>
    </FormControl>
  );
};

export default PersonalInformation;
