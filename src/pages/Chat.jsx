import { Box, Heading, VStack, Input, Button } from "@chakra-ui/react";

function Chat() {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Chat with Product Owner</Heading>
        <Input placeholder="Type your message here..." />
        <Button colorScheme="teal">Send</Button>
      </VStack>
    </Box>
  );
}

export default Chat;
