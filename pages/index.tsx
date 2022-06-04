import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Heading>NextJS, Chakra, and Typescript!</Heading>
      <Text>Some basic examples here.</Text>
      <Button colorScheme='brandGreen'>
        This button uses the custom colorScheme
      </Button>
    </Box>
  );
}
