import { Box, Heading, VStack, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box borderWidth={1} borderRadius="md" overflow="hidden" boxShadow="sm">
      <Image src={imageSrc} alt={title} />
      <VStack p={4} spacing={2} align="start">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <Box cursor="pointer" display="flex" alignItems="center">
          <Text fontWeight="bold">See More</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
