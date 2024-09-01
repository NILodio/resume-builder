import {
  Center,
  Code,
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  Button,
  useBreakpointValue,
  useColorMode,
  Image,
  Link as ChakraLink,
  FormControl,
  useColorModeValue,
  Icon,
  Grid,
  GridItem,
  Divider,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiChakraui, SiTypescript, SiVite } from "react-icons/si";
import React, { useState, createContext, useContext } from "react";
import MotionBox from "components/motion/MotionBox";
import PersonalInformation from "components/form/PersonalInformation";
import MainWrap from "components/wrapper/MainWrap";
import { useDesktopWidthCheck } from "functions/helpers/desktopWidthChecker";
import DefaultResumeData from "data/DefaultResumeData";

// Creating ResumeContext with default data
const ResumeContext = createContext(DefaultResumeData);

function App() {
  // Chakra hooks for color mode and responsive design
  const { colorMode } = useColorMode();
  const isDesktopWidth = useDesktopWidthCheck();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  // State for resume data and form visibility
  const [resumeData, setResumeData] = useState(DefaultResumeData);
  const [formClose, setFormClose] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        handleChange,
      }}
    >
      <MainWrap>
        <Flex>
          {!formClose && (
            <Box flex="0 1 auto" maxW="400px">
            <FormControl flex="0 1 auto" maxW="1000px">
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
                <GridItem colSpan={1}>
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
                <GridItem colSpan={1}>
                  <FormLabel htmlFor="contactInformation">
                    Contact Information
                  </FormLabel>
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
              </Grid>
            </FormControl>
            </Box>
          )}
          <Box flex="1 1 0" p={4}>
            <Heading>Preview Section</Heading>
          </Box>
        </Flex>
      </MainWrap>
    </ResumeContext.Provider>
  );
}

export default App;
