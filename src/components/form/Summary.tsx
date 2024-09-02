import React, { useContext } from 'react';
import {
  Textarea,
  Box,
  Heading,
} from '@chakra-ui/react';
import { ResumeContext } from '../../App';
import { ResumeContextType } from '../../types/resume';

const Summary: React.FC = () => {
  const { resumeData, handleChange } = useContext(ResumeContext) as ResumeContextType;


  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Heading as="h2" size="md">
        Summary
      </Heading>
      <Box>
        <Textarea
          placeholder="Summary"
          name="summary"
          value={resumeData.summary}
          onChange={handleChange}
          maxLength={500}
          height="10rem"
          width="100%"
        />
      </Box>
    </Box>
  );
};

export default Summary;
