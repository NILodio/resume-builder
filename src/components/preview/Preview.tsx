import React, { useContext} from 'react';
import {
  Box,
  Heading,
  IconButton,
  Stack,
  Image,
  Text,
  Grid,
  Link as ChakraLink,
} from '@chakra-ui/react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBold,
  FaItalic,
  FaPlus,
  FaMinus,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaUnderline,
} from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { HighlightMenu } from 'react-highlight-menu';
import { CgWebsite } from 'react-icons/cg';
import { ResumeContext } from '../../App';
import { ResumeContextType } from '../../types/resume';
import ContactInfo from './ContactInfo';

const DragDropContext = dynamic(() =>
  import('react-beautiful-dnd').then((mod) => mod.DragDropContext)
);

const Preview: React.FC = () => {
  const {resumeData} = useContext(ResumeContext) as ResumeContextType;

  const icons = [
    { name: 'github', icon: <FaGithub /> },
    { name: 'linkedin', icon: <FaLinkedin /> },
    { name: 'twitter', icon: <FaTwitter /> },
    { name: 'facebook', icon: <FaFacebook /> },
    { name: 'instagram', icon: <FaInstagram /> },
    { name: 'youtube', icon: <FaYoutube /> },
    { name: 'website', icon: <CgWebsite /> },
  ];

  const MenuButton = ({ title, icon, onClick }: { title: string, icon: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined, onClick: () => void }) => (
    <IconButton
      aria-label={title}
      icon={icon}
      onClick={onClick}
      variant="ghost"
      size="sm"
    />
  );

  const formatText = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
  };

  const onDragEnd = () => {};

  const toggleBold = () => formatText('bold');
  const toggleItalic = () => formatText('italic');
  const toggleUnderline = () => formatText('underline');
  const changeFontSize = (size: string | number | undefined) => formatText('fontSize', size?.toString());
  const alignText = (alignment: string) => formatText(`justify${alignment}`);

  return (
    <Box w="60%" h="auto" p={6} borderWidth="1px" borderRadius="md" overflow="hidden">
      <A4PageWrapper>
        <HighlightMenu
          styles={{
            borderColor: '#C026D3',
            backgroundColor: '#C026D3',
            boxShadow: '0px 5px 5px 0px rgba(0, 0, 0, 0.15)',
            zIndex: 10,
            borderRadius: '5px',
            padding: '3px',
          }}
          allowedPlacements={['top', 'bottom']}
          target="body"
          menu={() => (
            <>
              <MenuButton title="Bold (Ctrl+B)" icon={<FaBold />} onClick={toggleBold} />
              <MenuButton title="Italic (Ctrl+I)" icon={<FaItalic />} onClick={toggleItalic} />
              <MenuButton title="Underline (Ctrl+U)" icon={<FaUnderline />} onClick={toggleUnderline} />
              <MenuButton title="Increase Font Size" icon={<FaPlus />} onClick={() => changeFontSize(4)} />
              <MenuButton title="Decrease Font Size" icon={<FaMinus />} onClick={() => changeFontSize(2)} />
              <MenuButton title="Align Left" icon={<FaAlignLeft />} onClick={() => alignText('Left')} />
              <MenuButton title="Align Center" icon={<FaAlignCenter />} onClick={() => alignText('Center')} />
              <MenuButton title="Align Right" icon={<FaAlignRight />} onClick={() => alignText('Right')} />
            </>
          )}
        />
        <DragDropContext onDragEnd={onDragEnd}>
          <Stack align="center" mb="1">
            {resumeData.profilePicture.length > 0 && (
              <Box
                w="24"
                h="24"
                rounded="full"
                overflow="hidden"
                border="2px"
                borderColor="fuchsia.700"
              >
                <Image
                  src={resumeData.profilePicture}
                  alt="profile"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </Box>
            )}
            <Heading as="h2" size="lg">
              {resumeData.name}
            </Heading>
            <Text>{resumeData.position}</Text>
            <ContactInfo
              mainClass="flex flex-row gap-1 mb-1 contact"
              linkClass="inline-flex items-center gap-1"
              telData={resumeData.contactInformation}
              emailData={resumeData.email}
              addressData={resumeData.address}
            />
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
              {resumeData.socialMedia.map((socialMedia, index) => {
                const matchingIcon = icons.find(
                  (icon) => icon.name === socialMedia.socialMedia.toLowerCase()
                );
                return (
                  <ChakraLink
                    href={`http://${socialMedia.link}`}
                    aria-label={socialMedia.socialMedia}
                    key={index}
                    title={socialMedia.socialMedia}
                    target="_blank"
                    rel="noreferrer"
                    isExternal
                  >
                    <Stack direction="row" spacing={1} align="center">
                      {matchingIcon ? matchingIcon.icon : null}
                      <Text>{socialMedia.link}</Text>
                    </Stack>
                  </ChakraLink>
                );
              })}
            </Grid>
          </Stack>
        </DragDropContext>
      </A4PageWrapper>
    </Box>
  );
};

const A4PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const alertA4Size = () => {
    const preview = document.querySelector('.preview') as HTMLElement;
    if (preview) {
      const previewHeight = preview.offsetHeight;
      if (previewHeight > 1122) {
        alert('A4 size exceeded');
      }
    }
  };

  return (
    <Box className="w-8.5in" onLoad={alertA4Size}>
      {children}
    </Box>
  );
};

export default Preview;
