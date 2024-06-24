import { Container, Text, VStack, Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="left" textAlign="left">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to My Portfolio</Text>
        <Text fontSize="lg" textAlign="left">
          Hello! I'm an advertising creative specializing in both art direction and copywriting. Below are some of the brands I've worked with. Click on a brand to see my work.
        </Text>
        <Box>
          <Link as={RouterLink} to="/brand1" color="hotpink" fontSize="lg">Brand 1</Link>
        </Box>
        <Box>
          <Link as={RouterLink} to="/brand2" color="hotpink" fontSize="lg">Brand 2</Link>
        </Box>
        <Box>
          <Link as={RouterLink} to="/brand3" color="hotpink" fontSize="lg">Brand 3</Link>
        </Box>
        <Box>
          <Link as={RouterLink} to="/brand4" color="hotpink" fontSize="lg">Brand 4</Link>
        </Box>
        <Box>
          <Link as={RouterLink} to="/brand5" color="hotpink" fontSize="lg">Brand 5</Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;