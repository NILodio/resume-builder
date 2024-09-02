import React, { useContext} from 'react';
import {
  FormControl,
  Input,
  Grid,
  GridItem,
  Button,
  Box,
  Heading,
} from '@chakra-ui/react';
import { FaPlus} from 'react-icons/fa';
import { ResumeContext } from '../../App';
import { ResumeContextType } from '../../types/resume';

const Education: React.FC = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext) as ResumeContextType;

  const handleEducation = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    if (resumeData) {
      const newEducation = [...resumeData.education];
      newEducation[index] = { ...newEducation[index], [e.target.name]: e.target.value };
      setResumeData({ ...resumeData, education: newEducation });
    }
  };

  const addEducation = () => {
    if (resumeData) {
      setResumeData({
        ...resumeData,
        education: [...resumeData.education, { school: '', degree: '', startYear: '', endYear: '' }],
      });
    }
  };

  const removeEducation = (index: number) => {
    if (resumeData) {
      const newEducation = [...resumeData.education];
      newEducation.splice(index, 1);
      setResumeData({ ...resumeData, education: newEducation });
    }
  };

  return (
    <FormControl mb={4}>
      <Heading size="md" mb={4}>Education</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {resumeData?.education.map((education, index) => (
          <React.Fragment key={index}>
            <GridItem colSpan={1}>
              <Input
                id={`education-${index}`}
                type="text"
                placeholder="School"
                name="school"
                value={education.school}
                onChange={(e) => handleEducation(e, index)}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Input
                id={`education-${index}`}
                type="text"
                placeholder="Degree"
                name="degree"
                value={education.degree}
                onChange={(e) => handleEducation(e, index)}
              />
            </GridItem>
          </React.Fragment>
        ))}
      </Grid>
      <Box mt={4}>
        <Button onClick={addEducation} colorScheme="teal" mr={2} leftIcon={React.createElement(FaPlus)}>Add</Button>
        {resumeData?.education.length > 0 && (
          <Button onClick={() => removeEducation(resumeData.education.length - 1)} colorScheme="red">
            Remove Last
          </Button>
        )}
      </Box>
    </FormControl>
  );
};

export default Education;
