import { Container, Text, VStack } from "@chakra-ui/react";

const Brand5 = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Brand 5</Text>
        <Text>Here is some of the work I've done for Brand 5.</Text>
      </VStack>
    </Container>
  );
};

export default Brand5;