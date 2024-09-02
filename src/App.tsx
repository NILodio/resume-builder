// src/App.tsx
import {
  Flex,
  Box,
  useColorMode,
  Text,
} from '@chakra-ui/react';
import React, { useState, createContext } from 'react';
import MainWrap from './components/wrapper/MainWrap';
import PersonalInformation from './components/form/PersonalInformation';
import { ResumeContextType, ResumeData } from './types/resume';
import Preview from './components/preview/Preview';
import SocialMedia from './components/form/SocialMedia';
import Summary from './components/form/Summary';
import Education from './components/form/Education';
import data from './utility/data.json';

export const ResumeContext = createContext<ResumeContextType>({
  resumeData: {} as ResumeData, // Default value should match the type
  setResumeData: () => {},
  handleChange: () => {},
});

const App: React.FC = () => {
  useColorMode();
  const [resumeData, setResumeData] = useState<ResumeData>(data);
  const [formClose] = useState<boolean>(false);
  const [error] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  if (error) {
    return (
      <MainWrap>
        <Flex justify="center" align="center" h="100vh">
          <Text color="red.500">Error: {error}</Text>
        </Flex>
      </MainWrap>
    );
  }

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData, handleChange }}>
      <MainWrap>
        <Flex direction={{ base: 'column', md: 'row' }} gap={4} p={4}>
          {!formClose && (
            <Box
            maxH="100vh"
            overflowY="auto"
          >
              <PersonalInformation />
              <SocialMedia />
              <Summary />
              <Education />
            </Box>
          )}
          <Preview />
        </Flex>
      </MainWrap>
    </ResumeContext.Provider>
  );
};

export default App;
