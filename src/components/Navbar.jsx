import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
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
    <Box bg="hotpink" px={4} py={2} mb={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold">Home</Link>
        </Box>
        <Flex alignItems="center">
          <Link
            as={RouterLink}
            to="/brand1"
            color="white"
            mx={2}
            onMouseEnter={() => handleMouseEnter("brand1", "path/to/image1.jpg")}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredBrand === "brand1" ? 0.5 : 1 }}
          >
            Brand 1
          </Link>
          <Link
            as={RouterLink}
            to="/brand2"
            color="white"
            mx={2}
            onMouseEnter={() => handleMouseEnter("brand2", "path/to/image2.jpg")}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredBrand === "brand2" ? 0.5 : 1 }}
          >
            Brand 2
          </Link>
          <Link
            as={RouterLink}
            to="/brand3"
            color="white"
            mx={2}
            onMouseEnter={() => handleMouseEnter("brand3", "path/to/image3.jpg")}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredBrand === "brand3" ? 0.5 : 1 }}
          >
            Brand 3
          </Link>
          <Link
            as={RouterLink}
            to="/brand4"
            color="white"
            mx={2}
            onMouseEnter={() => handleMouseEnter("brand4", "path/to/image4.jpg")}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredBrand === "brand4" ? 0.5 : 1 }}
          >
            Brand 4
          </Link>
          <Link
            as={RouterLink}
            to="/brand5"
            color="white"
            mx={2}
            onMouseEnter={() => handleMouseEnter("brand5", "path/to/image5.jpg")}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredBrand === "brand5" ? 0.5 : 1 }}
          >
            Brand 5
          </Link>
        </Flex>
      </Flex>
      {hoveredBrand && (
        <Box position="absolute" right="10px" top="50%" transform="translateY(-50%)">
          <img src={imageUrl} alt={hoveredBrand} style={{ width: "100px", height: "auto" }} />
        </Box>
      )}
    </Box>
  );
};

export default Navbar;