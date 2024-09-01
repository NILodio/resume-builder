import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import { useDesktopWidthCheck } from "../../functions/helpers/desktopWidthChecker";
import DarkModeSwitch from "./DarkModeSwitch";

const HeaderComponent = () => {
  const { colorMode } = useColorMode();
  const isDesktopWidth = useDesktopWidthCheck();

  return (
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      position="fixed"
      width="100%"
      opacity={0.95}
      top={0}
      zIndex={5}
      transition="background-color 0.3s ease-out"
    >
      <Flex
        justifyContent="space-between"
        align="center"
        maxW="48rem"
        mx="auto"
        px={isDesktopWidth ? 4 : 6}
        py={3}
      >
        <Text as="a" href="/" fontSize="lg" fontWeight="bold">
          Danilo-Diaz-Valencia
        </Text>

        <Flex gap={3} align="center">
          <Button
            as="a"
            href="https://github.com/Danilo-Diaz-Valencia"
            leftIcon={<FaGithub />}
            variant="ghost"
            size="sm"
          >
            Open in GitHub
          </Button>

          <DarkModeSwitch />
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderComponent;
