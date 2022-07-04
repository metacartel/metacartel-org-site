import { Box, Heading, Text, Button,  } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box> 
      <Heading>NextJS, Chakra, and Typescript!</Heading>
      <Text>Some basic examples here.</Text>
      <Button  backgroundColor={{base: 'red.500', xl: 'green.200'}} color='red.900' _hover={
        {
          bgColor: 'red.600',
        }
      }>
        This button uses the custom colorScheme
      </Button>
    </Box>
  );
}



