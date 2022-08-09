import { Box, Button, Heading, Flex, Text } from "@chakra-ui/react";
import { CalendarList, Footer, GrantList, PhotoCarousel, Section, ShotsFired, PageHero, Motto, WipList } from "../components"

const Home = () => {
  return (
    <Flex
      height={'100%'}
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
      <Section>
        <Flex w={'100%'} maxWidth={'1200px'} margin={'0 auto'} flexWrap={'wrap'}>
          <Flex justifyContent={'space-between'} alignItems={'center'} py={25} w={'100%'}>
            <Heading color={'brand.purp'} fontSize={'xl'}>Upcoming Events</Heading>
            <Button
              as='a'
              borderWidth={2}
              borderColor="brand.purp"
              borderStyle={'solid'}
              px={4}
              py={2}
              whiteSpace="nowrap"
              bg='none'
              cursor='pointer'
              _hover={{bg: 'brand.purp', color: 'white'}}
            >
              View
            </Button>
          </Flex>
          <CalendarList />
        </Flex>
      </Section>
      <Section>
        <Flex w={'100%'} maxWidth={'1200px'} margin={'0 auto'} flexWrap={'wrap'}>
          <Flex color={'brand.red'} justifyContent={'space-between'} alignItems={'center'} py={25} w={'100%'}>
            <Heading fontSize={'xl'}>Recent Grants</Heading>
            <Button
              as='a'
              borderWidth={2}
              borderColor="brand.red"
              borderStyle={'solid'}
              px={4}
              py={2}
              whiteSpace="nowrap"
              bg='none'
              cursor='pointer'
              _hover={{bg: 'brand.red', color: 'white'}}
            >
              View
            </Button>
          </Flex>
          <GrantList />
        </Flex>
      </Section>
      <Section>
        <Flex w={'100%'} maxWidth={'1200px'} margin={'0 auto'} flexWrap={'wrap'}>
          <Flex color={'brand.teal'} justifyContent={'space-between'} alignItems={'center'} py={25} w={'100%'}>
            <Heading fontSize={'xl'}>Works in Progress</Heading>
            <Button
              as='a'
              borderWidth={2}
              borderColor="brand.teal"
              borderStyle={'solid'}
              px={4}
              py={2}
              whiteSpace="nowrap"
              bg='none'
              cursor='pointer'
              _hover={{bg: 'brand.teal', color: 'white'}}
            >
              View
            </Button>
            
          </Flex>
          <WipList />
        </Flex>
      </Section>
      
      <Footer />
  </Flex>
  );
}

export default Home
