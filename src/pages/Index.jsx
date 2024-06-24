import { Container, Text, VStack, Box, Link, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="left" textAlign="left" mt={4}>
      <VStack spacing={4} align="left">
        <Heading as="h1" size="4xl" fontWeight="bold">HI, I'M ROSE</Heading>
        <Text fontSize="md" maxW="600px">
          As a passionate web designer with years of experience, I specialize in creating clean and user-friendly designs that exceed client expectations. My commitment to delivering high-quality work ensures that each project is tailored to meet the unique needs of every client. Together, we can bring your vision to life quickly and efficiently.
        </Text>
        <Heading as="h2" size="md" fontWeight="bold" mt={8}>SELECTED WORK</Heading>
        <Box>
          <Text as="span" fontSize="lg" fontWeight="bold">01</Text>
          <Link as={RouterLink} to="/brand1" fontSize="4xl" fontWeight="bold" ml={2}>KEW GARDEN</Link>
        </Box>
        <Box>
          <Text as="span" fontSize="lg" fontWeight="bold">02</Text>
          <Link as={RouterLink} to="/brand2" fontSize="4xl" fontWeight="bold" ml={2}>BRAND 2</Link>
        </Box>
        <Box>
          <Text as="span" fontSize="lg" fontWeight="bold">03</Text>
          <Link as={RouterLink} to="/brand3" fontSize="4xl" fontWeight="bold" ml={2}>BRAND 3</Link>
        </Box>
        <Box>
          <Text as="span" fontSize="lg" fontWeight="bold">04</Text>
          <Link as={RouterLink} to="/brand4" fontSize="4xl" fontWeight="bold" ml={2}>BRAND 4</Link>
        </Box>
        <Box>
          <Text as="span" fontSize="lg" fontWeight="bold">05</Text>
          <Link as={RouterLink} to="/brand5" fontSize="4xl" fontWeight="bold" ml={2}>BRAND 5</Link>
        </Box>
        <Heading as="h2" size="md" fontWeight="bold">CONTACT ME</Heading>
        <Text fontSize="2xl" fontWeight="bold" textDecoration="underline">LET'S WORK TOGETHER!</Text>
      </VStack>
    </Container>
  );
};

export default Index;