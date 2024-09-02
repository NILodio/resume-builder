import React, { useContext } from 'react';
import {
  FormControl,
  FormLabel,
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

const SocialMedia: React.FC = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext) as ResumeContextType;

  const handleSocialMedia = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    if (resumeData) {
      const newSocialMedia = [...resumeData.socialMedia];
      newSocialMedia[index] = { ...newSocialMedia[index], [e.target.name]: e.target.value };
      setResumeData({ ...resumeData, socialMedia: newSocialMedia });
    }
  };

  const addSocialMedia = () => {
    if (resumeData) {
      setResumeData({
        ...resumeData,
        socialMedia: [...resumeData.socialMedia, { socialMedia: '', link: '' }],
      });
    }
  };

  const removeSocialMedia = (index: number) => {
    if (resumeData) {
      const newSocialMedia = [...resumeData.socialMedia];
      newSocialMedia.splice(index, 1);
      setResumeData({ ...resumeData, socialMedia: newSocialMedia });
    }
  };

  return (
    <FormControl mb={3}>
      <Heading size="md" mb={4}>Social Media</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {resumeData?.socialMedia.map((socialMedia, index) => (
          <React.Fragment key={index}>
            <GridItem colSpan={1}>
              <FormLabel htmlFor={`socialMedia-${index}`}>Social Media</FormLabel>
              <Input
                id={`socialMedia-${index}`}
                type="text"
                placeholder="Social Media"
                name="socialMedia"
                value={socialMedia.socialMedia}
                onChange={(e) => handleSocialMedia(e, index)}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <FormLabel htmlFor={`link-${index}`}>Link</FormLabel>
              <Input
                id={`link-${index}`}
                type="text"
                placeholder="Link"
                name="link"
                value={socialMedia.link}
                onChange={(e) => handleSocialMedia(e, index)}
              />
            </GridItem>
          </React.Fragment>
        ))}
      </Grid>
      <Box mt={4}>
        <Button onClick={addSocialMedia} colorScheme="teal" mr={2} leftIcon={React.createElement(FaPlus)}>Add</Button>
        {resumeData?.socialMedia.length > 0 && (
          <Button onClick={() => removeSocialMedia(resumeData.socialMedia.length - 1)} colorScheme="red">
            Remove Last
          </Button>
        )}
      </Box>
    </FormControl>
  );
};

export default SocialMedia;
