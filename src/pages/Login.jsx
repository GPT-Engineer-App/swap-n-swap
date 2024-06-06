import { Box, Heading, Input, Button, VStack } from "@chakra-ui/react";

function Login() {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Login</Heading>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="teal">Login</Button>
      </VStack>
    </Box>
  );
}

export default Login;
