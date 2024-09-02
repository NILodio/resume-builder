import React from 'react';
import { Box, Link, Text, Stack} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, Icon } from '@chakra-ui/icons'; // Example icons, replace with your icons if needed
import {
    FaHome
  } from 'react-icons/fa';

interface ContactInfoProps {
  mainClass?: string;
  linkClass?: string;
  telData: string;
  emailData: string;
  addressData: string;
  telIcon?: React.ReactNode;
  emailIcon?: React.ReactNode;
  addressIcon?: React.ReactNode;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  mainClass,
  linkClass,
  telData,
  emailData,
  addressData,
}) => {
  return (
    <Box className={mainClass}>
    <Stack spacing={2} direction="row" align="center">
        <Link className={linkClass} href={`tel:${telData}`} aria-label="Phone Number" display="flex" alignItems="center">
            <PhoneIcon mr={1} /> <Text>{telData}</Text>
        </Link>
        <Link className={linkClass} href={`mailto:${emailData}`} aria-label="Email Address" display="flex" alignItems="center">
            <EmailIcon mr={2} /> <Text>{emailData}</Text>
        </Link>
        <Link className={linkClass} aria-label="Address" display="flex" alignItems="center">
            <Icon as={FaHome} mr={2}/> <Text>{addressData}</Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default ContactInfo;
