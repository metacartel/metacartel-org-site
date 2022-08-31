import { readdirSync } from 'fs'
import path from 'path';
import { Box, Flex, Text } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import {
  CalendarList,
  EcosystemList,
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
import { PHOTO_CAROUSEL_IMAGES_PATH } from '../constants'

export const getStaticProps: GetStaticProps = async () => {
  const photosPath = path.join('public', 'images', 'FamilyPhotos')
  const photos = readdirSync(photosPath).map(file => `${PHOTO_CAROUSEL_IMAGES_PATH}/${file}`)
  return { props: { photos } };
};

interface HomeProps {
  photos: string[]
}
const Home: NextPage<HomeProps> = ({ photos }) => {
  return (
    <Flex direction={'column'}>
      <PageHero>
        <Text whiteSpace='nowrap' fontFamily='inherit' textAlign='center'>
          A supportive ecosystem of<br/>creators and builders at the<br />forefront of web3 and DAOs
        </Text>
      </PageHero>
      <MottoSection />
      <Section>
        <Box display={{base: 'inline', md: 'flex'}} alignItems='center' borderBottom="0.5rem solid black">
          <ShotsFired />
          <PhotoCarousel photos={photos} />
        </Box>
      </Section>
      <TwitterSection />
      <Flex direction="column" gap={[8, null, 16]} mt={[8, null, 16]}>
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
          icon="mountains"
          title="Ecosystem"
          alignItems={'center'}
          p={25}
          mx='auto'
          color="brand.sun"
          pageUrl="/ecosystem">
          <EcosystemList color="brand.sun" />
        </SectionList>
        <SectionList
          justifyContent={'space-between'}
          alignItems={'center'}
          icon="bag"
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
          pageUrl="https://app.dework.xyz/metacartel"
          linkLabel="View Dework board"
        >
          <WipList color='brand.teal' />
        </SectionList>
        <Membership />
      </Flex>
    </Flex>
  );
}

export default Home
