import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { SectionList, CalendarList, GrantList, PhotoCarousel, Section, ShotsFired, PageHero, Motto, WipList } from "../components"

const Home = () => {
  return (
    <Flex direction={'column'}>
      <PageHero>
        An ecosystem of creators and operators building and supporting at the forefront of web3 and DAOs
      </PageHero>
      <Motto />
      <Section bg="black">
        <Box display={{base: 'inline', md: 'flex'}} borderY="0.5rem solid black">
          <ShotsFired />
          <PhotoCarousel />
        </Box>
      </Section>
      <SectionList
        justifyContent={'space-between'}
        alignItems={'center'}
        icon="calendar"
        title="Upcoming Events"
        color="brand.purp"
        p={25}
        maxW="container"
        mx='auto'
        pageUrl="/events"
      >
        <CalendarList color="brand.purp"/>
      </SectionList>
      <SectionList
        justifyContent={'space-between'}
        alignItems={'center'}
        icon="test-tube"
        title="Works in Progress"
        color="brand.teal"
        p={25}
        maxW="container"
        mx='auto'
        pageUrl="/get-involved" /* TODO: Update */
      >
        <WipList color='brand.teal' />
      </SectionList>
      <SectionList
        justifyContent={'space-between'}
        alignItems={'center'}
        icon="test-tube"
        title="Recent Grants"
        color="brand.green"
        p={25}
        maxW="container"
        mx='auto'
        pageUrl="/grants"
      >
        <GrantList color="brand.green" />
      </SectionList>
    </Flex>
  );
}

export default Home
