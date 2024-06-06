import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Button as={Link} to="/login" colorScheme="teal" variant="ghost">
          Login
        </Button>
        <Button as={Link} to="/chat" colorScheme="teal" variant="ghost">
          Chat
        </Button>
      </Flex>
    </Box>
  );
}

export default Navigation;
