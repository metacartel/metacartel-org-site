import { Flex, Text, Link } from "@chakra-ui/react";

const BASE_URL = 'https://dapp.substack.com/p/shots-fired-'
// TODO: Pull data from substack
const data = [
  {
    releaseNumber: 55,
    featured: [
      "MetaGammaDelta",
      "RaidGuild",
      "RaidBrood",
      "MetaPod",
      "MetaGame",
      "Rika",
      "MCV",
      "DAOHaus",
      "MetaFactory"
    ]
  },
].sort(({ releaseNumber: a }, { releaseNumber: b }) => a < b ? 1 : -1)[0];

export const ShotsFired = () => {
  const { releaseNumber, featured } = data;
  const getUrlFromNumber = (num: number): string => `${BASE_URL}${num}`
  return (
    <Flex
      bg='white url(/dot-pattern.svg) repeat'
      p={12}
      border='2px'
      borderColor='fg'
      borderTop='none'
      flex={1}
    >
      <Flex
        direction='column'
        bg='bg'
        border='8px'
        borderColor='fg'
        p={8}
        gap={3}
      >
        <Text
          as='h2'
          fontFamily='MexicanTequila'
          fontSize='4rem'
          color='fg'
          lineHeight='90%'
        >
          Shots Fired<br/>
          #{releaseNumber}
        </Text>
        <Text
          as="p"
          fontFamily='Helvetica'
          fontWeight={'900'}
          letterSpacing={'tighter'}
          color='fg'
          textTransform={'uppercase'}
        >
          {featured.map((name, idx) => `${name}${idx < featured.length - 1 ? ', ' : ''}`)}
        </Text>
        <Link href={getUrlFromNumber(releaseNumber)} isExternal>
          <Text
            as="p"
            fontFamily='Helvetica'
            fontWeight='900'
            letterSpacing={'tighter'}
            color='fg'
            fontSize={'1.5rem'}
            _hover={{ color: 'brand.red', textDecoration: 'underline' }}
          >
            dapp.substack.com
          </Text>
        </Link>
      </Flex>
    </Flex>
  )
}
