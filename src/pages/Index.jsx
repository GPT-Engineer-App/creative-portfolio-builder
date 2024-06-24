import { Container, Text, VStack, Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to My Portfolio</Text>
        <Text textAlign="center">
          Hello! I'm an advertising creative specializing in both art direction and copywriting. Below are some of the brands I've worked with. Click on a brand to see my work.
        </Text>
        <Box>
          <Link as={RouterLink} to="/brand1" color="teal.500" fontSize="lg">Brand 1</Link>
        </Box>
        <Box>
          <Link as={RouterLink} to="/brand2" color="teal.500" fontSize="lg">Brand 2</Link>
        </Box>
        <Box>
          <Link as={RouterLink} to="/brand3" color="teal.500" fontSize="lg">Brand 3</Link>
        </Box>
        <Box>
          <Link as={RouterLink} to="/brand4" color="teal.500" fontSize="lg">Brand 4</Link>
        </Box>
        <Box>
          <Link as={RouterLink} to="/brand5" color="teal.500" fontSize="lg">Brand 5</Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;