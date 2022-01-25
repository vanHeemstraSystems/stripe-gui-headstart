import React from "react";
import {
  Box,
  Container,
  Column,
  Heading,
  Text
} from 'gestalt';

const Footer = () => {
  return (
    <Box
      position="absolute"
      padding={0}
      bottom={true}
      width="100%"
      height={100}
      background="midnight"
      text="white"  
    >
      <Container
        display="flex"
        direction="column"
        justifyContent="center"
        margin={0}
      >
        <Column
          display="flex"
          direction="column"
          textAlign="left"
          marginLeft={60}
        >
          <Heading
            size="xs"
            color="gray"
          >
            Environment
          </Heading>
          <Text
            color="midnight"
          >
            {process.env.NODE_ENV}
          </Text>
        </Column>
      </Container>
    </Box>
  )
};

export default Footer;
