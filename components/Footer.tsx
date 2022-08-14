import { Flex, SimpleGrid, Text, VStack, Link, FlexProps } from '@chakra-ui/react'
import {
  ECOSYSTEM_PATH,
  GRANTS_PATH,
  LORE_PATH,
  MANIFESTO_PATH,
  TWITTER_ACCOUNT_URL,
  DISCORD_INVITE_URL,
  FORUM_URL,
  DAOHAUS_URL,
} from '../constants'

const pageLinks = [
  {
    label: 'Ecosystem',
    href: ECOSYSTEM_PATH
  },
  {
    label: 'Grants',
    href: GRANTS_PATH
  },
  {
    label: 'Lore',
    href: LORE_PATH
  },
  {
    label: 'Manifesto',
    href: MANIFESTO_PATH
  },
]

const socialLinks = [
  {
    label: 'Twitter',
    href: TWITTER_ACCOUNT_URL
  },
  {
    label: 'Discord',
    href: DISCORD_INVITE_URL
  },
  {
    label: 'Forum',
    href: FORUM_URL
  },
  {
    label: 'DAO',
    href: DAOHAUS_URL
  },
]

export const Footer: React.FC<FlexProps> = () => (
  <Flex
    as='footer'
    flexDirection='column'
    py={20}
    pb={36}
    w='100%'
    color='brand.red'
    justifyContent='center'
  >
    <Flex py={25} justifyContent={'center'}>
      <Link href='/#' _hover={{ textDecoration: 'none', transform: 'scale(1.05)' }}>
        <Text as={'h4'} textAlign='start' fontWeight='bold' fontSize='2xl'>
          MetaCartel
        </Text>
      </Link>
    </Flex>
    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={25} alignSelf={'center'}>
      <VStack>
        {pageLinks.map(({ label, href }) => <Link href={href}>{label}</Link>)}
      </VStack>
      <VStack>
        {socialLinks.map(({ label, href }) => <Link href={href}>{label}</Link>)}
      </VStack>
    </SimpleGrid>
  </Flex>
)
