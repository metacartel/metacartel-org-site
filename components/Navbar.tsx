import { Flex, HStack, Text, Box, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'
import { IconButton } from './IconButton'
import { PAGE_PATHS } from '../constants'

export const Navbar: React.FC = () => {
  const border = '6px solid'
  return (
    <Flex
      bg="black"
      direction={{ base: 'column-reverse', lg: 'row' }}
      alignItems='center'
      borderBottom={border}
      borderColor='brand.black'
      w='100%'
    >
      <Flex
        justifyContent='flex-end'
        flex={1}
        bg="white"
        width="100%"
      >
        <Flex w='100%' flex={1} maxW={{ base: '100%', lg: "halfContainer"}}>
          <Box flex={1} py={[4, null, 6]} px={6} borderEnd={border}>
            <Link href='/'>
              <Heading as='h1' fontSize={32} fontWeight='700'>
                MetaCartel
              </Heading>
            </Link>
          </Box>
          <Box py={[4, null, 6]} px={6}>
            <Image
              src='/chili-pixel.svg'
              width={32}
              height={32}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex flex={1} justifyContent='flex-start'>
        <Flex
          alignItems='center'
          gap={6}
          py={[4, null, 6]}
          px={8}
          justifyContent='flex-end'
          color="brand.red"
          maxW="halfContainer"
          flex={1}
        >
          {PAGE_PATHS.map(({ name, path }) => <Link href={path} key={name}>{name}</Link>)}
          <IconButton icon='key' title='Connect' color='brand.red' />
        </Flex>
      </Flex>
    </Flex>
  )
}
