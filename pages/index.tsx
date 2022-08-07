import { Flex, Box, Button } from "@chakra-ui/react";
import { CalendarList, GrantList, PhotoCarousel, ShotsFired, PageHero, Motto, WipList } from "../components"

const Home = () => {
  return (
    <Flex
      height={'100%'}
      maxWidth={'1200px'}
      minWidth={'100%'}
      margin={'0 auto'}
      direction={'column'}
    >
      <PageHero>
        An ecosystem of creators and operators building and supporting at the forefront of web3 and DAOs
      </PageHero>
      <Motto />
      <Box display={{base: 'inline', md: 'flex'}} flex={{ md: 1 }} borderY="0.5rem solid black" >
        <ShotsFired />
        <PhotoCarousel />
      </Box>
      <Flex justifyContent={'space-betwen'} alignItems={'center'} py={25}>
        <h2>Upcoming Events</h2>
        <Button
          as='a'
          borderWidth={2}
          borderColor="brand.black"
          borderStyle={'solid'}
          px={4}
          py={2}
          whiteSpace="nowrap"
          bg='none'
          cursor='pointer'
          _hover={{bg: 'brand.black', color: 'white'}}
        >
          View
        </Button>
      </Flex>
      <CalendarList />
      <Flex justifyContent={'space-betwen'} alignItems={'center'} py={25}>
        <h2>Works in Progress</h2>
        <Button
          as='a'
          borderWidth={2}
          borderColor="brand.black"
          borderStyle={'solid'}
          px={4}
          py={2}
          whiteSpace="nowrap"
          bg='none'
          cursor='pointer'
          _hover={{bg: 'brand.black', color: 'white'}}
        >
          View
        </Button>
      </Flex>
      <WipList />
      <Flex justifyContent={'space-betwen'} alignItems={'center'} py={25}>
        <h2>Recent Grants</h2>
        <Button
          as='a'
          borderWidth={2}
          borderColor="brand.black"
          borderStyle={'solid'}
          px={4}
          py={2}
          whiteSpace="nowrap"
          bg='none'
          cursor='pointer'
          _hover={{bg: 'brand.black', color: 'white'}}
        >
          View
        </Button>
      </Flex>
      <GrantList />
  </Flex>
  );
}

export default Home
