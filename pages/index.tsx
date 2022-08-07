import { Flex, Box } from "@chakra-ui/react";
import { PhotoCarousel, ShotsFired, PageHero } from "../components"

const Home = () => {
  return (
    <Flex
      height={'100%'}
      maxWidth={'1200px'}
      margin={'0 auto'}
      direction={'column'}
    >
      <PageHero>
        An ecosystem of creators and operators building and supporting at the forefront of web3 and DAOs
      </PageHero>
      <Box display={{base: 'inline', md: 'flex'}} flex={{ md: 1 }} >
        <ShotsFired />
        <PhotoCarousel />
      </Box>
  </Flex>
  );
}

export default Home
