import { Flex, Text } from "@chakra-ui/react";

export const ShotsFired = () => {
  return (
    <Flex
      bg='white url("/dot-pattern.svg") repeat'
      p={12}
      border='2px solid black'
      borderTop='none'
      flex={1}
    >
      <Flex
        direction='column'
        bg='brand.offWhite'
        border='1rem solid black'
        p={8}
      >
        <Text
          as="h2"
          fontFamily="MexicanTequila"
          fontSize="4rem"
          color="black"
          lineHeight={"90%"}
          >
          Shots Fired
        </Text>
        <Text
          as="p"
          fontFamily="MexicanTequila"
          fontSize="4rem"
          color="black"
          lineHeight={"110%"}
        >
          #69
        </Text>
        <Text
          as="p"
          fontFamily='Helvetica'
          fontWeight={'900'}
          letterSpacing={'tighter'}
          color={'black'}
          textTransform={'uppercase'}
        >
          MetaGammaDelta, RaidGuild, MetaPod, MCV, DAOHaus, MetaFactory, MetaGame, Rika
        </Text>
        <Text
          as="p"
          fontFamily='Helvetica'
          fontWeight='900'
          letterSpacing={'tighter'}
          color={'black'}
          fontSize={'1.5rem'}
        >
          dapp.substack.com
        </Text>
      </Flex>
    </Flex>
  )
}
