import { Container, Text, VStack } from "@chakra-ui/react";

const Brand3 = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" textAlign="left">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Brand 3</Text>
        <Text fontSize="lg">Here is some of the work I've done for Brand 3.</Text>
      </VStack>
    </Container>
  );
};

export default Brand3;