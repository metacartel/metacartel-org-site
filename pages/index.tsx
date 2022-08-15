import { Box, Flex } from "@chakra-ui/react";
import {
  CalendarList,
  GrantList,
  Membership,
  MottoSection,
  PageHero,
  PhotoCarousel,
  Section,
  SectionList,
  ShotsFired,
  TwitterSection,
  WipList,
} from "../components"

const Home = () => {
  return (
    <Flex direction={'column'}>
      <PageHero>
        A supportive ecosystem of creators and builders at the forefront of web3 and DAOs
      </PageHero>
      <MottoSection />
      <Section>
        <Box display={{base: 'inline', md: 'flex'}} borderY="0.5rem solid black">
          <ShotsFired />
          <PhotoCarousel />
        </Box>
      </Section>
      <TwitterSection />
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
        title="Recent Grants"
        color="brand.green"
        p={25}
        maxW="container"
        mx='auto'
        pageUrl="/grants"
      >
        <GrantList color="brand.green" />
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
      <Membership />
    </Flex>
  );
}

export default Home
