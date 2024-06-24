import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold">Home</Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/brand1" color="white" mx={2}>Brand 1</Link>
          <Link as={RouterLink} to="/brand2" color="white" mx={2}>Brand 2</Link>
          <Link as={RouterLink} to="/brand3" color="white" mx={2}>Brand 3</Link>
          <Link as={RouterLink} to="/brand4" color="white" mx={2}>Brand 4</Link>
          <Link as={RouterLink} to="/brand5" color="white" mx={2}>Brand 5</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;