import { useState, useEffect } from "react";
import { Container, Text, VStack, Box, Link, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleMouseEnter = (brand, url) => {
    setHoveredBrand(brand);
    setImageUrl(url);
  };

  const handleMouseLeave = () => {
    setHoveredBrand(null);
    setImageUrl("");
  };

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
          <Link
            as={RouterLink}
            to="/brand1"
            fontSize="4xl"
            fontWeight="bold"
            ml={2}
            onMouseEnter={() => handleMouseEnter("brand1", "path/to/image1.jpg")}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredBrand === "brand1" ? 0.5 : 1 }}
          >
            KEW GARDEN
          </Link>
        </Box>
        <Box>
          <Text as="span" fontSize="lg" fontWeight="bold">02</Text>
          <Link
            as={RouterLink}
            to="/brand2"
            fontSize="4xl"
            fontWeight="bold"
            ml={2}
            onMouseEnter={() => handleMouseEnter("brand2", "path/to/image2.jpg")}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredBrand === "brand2" ? 0.5 : 1 }}
          >
            BRAND 2
          </Link>
        </Box>
        <Box>
          <Text as="span" fontSize="lg" fontWeight="bold">03</Text>
          <Link
            as={RouterLink}
            to="/brand3"
            fontSize="4xl"
            fontWeight="bold"
            ml={2}
            onMouseEnter={() => handleMouseEnter("brand3", "path/to/image3.jpg")}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredBrand === "brand3" ? 0.5 : 1 }}
          >
            BRAND 3
          </Link>
        </Box>
        <Box>
          <Text as="span" fontSize="lg" fontWeight="bold">04</Text>
          <Link
            as={RouterLink}
            to="/brand4"
            fontSize="4xl"
            fontWeight="bold"
            ml={2}
            onMouseEnter={() => handleMouseEnter("brand4", "path/to/image4.jpg")}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredBrand === "brand4" ? 0.5 : 1 }}
          >
            BRAND 4
          </Link>
        </Box>
        <Box>
          <Text as="span" fontSize="lg" fontWeight="bold">05</Text>
          <Link
            as={RouterLink}
            to="/brand5"
            fontSize="4xl"
            fontWeight="bold"
            ml={2}
            onMouseEnter={() => handleMouseEnter("brand5", "path/to/image5.jpg")}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredBrand === "brand5" ? 0.5 : 1 }}
          >
            BRAND 5
          </Link>
        </Box>
        <Heading as="h2" size="md" fontWeight="bold">CONTACT ME</Heading>
        <Text fontSize="2xl" fontWeight="bold" textDecoration="underline">LET'S WORK TOGETHER!</Text>
      </VStack>
      {hoveredBrand && (
        <Box position="absolute" right="10px" top="50%" transform="translateY(-50%)">
          <img src={imageUrl} alt={hoveredBrand} style={{ width: "200px", height: "auto", position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)" }} />
        </Box>
      )}
    </Container>
  );
};

export default Index;