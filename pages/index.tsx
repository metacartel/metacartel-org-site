import { Flex, Box } from "@chakra-ui/react";
import { PhotoCarousel, ShotsFired } from "../components"

const Home = () => {
  return (
    <Flex
      height={'100%'}
      maxWidth={'1200px'}
      margin={'0 auto'}
      direction={'column'}
    >       
      <Box display={{base: 'inline', md: 'flex'}} flex={{ md: 1 }} >
        <ShotsFired />
        <PhotoCarousel />
      </Box>
  </Flex>
  );
}

export default Home
