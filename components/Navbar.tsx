import { Flex, HStack, Text, Box, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'
import { IconButton } from './IconButton'
import { PAGE_PATHS } from '../constants'

export const Navbar: React.FC = () => {
  const border = '6px solid black'
  return (
    <Flex
      bg="black"
      direction={{base: 'column-reverse', lg: 'row'}}
      alignItems='center'
      borderBottom={border}
      w={'100%'}
    >
      <HStack
        alignItems='center'
        justifyContent='center'
        flex={1}
        bg="white"
        height="100%"
        w={{base: '100%', lg: 'auto'}}
      >
        <Flex flex={1} p={6} borderEnd={border}>
          <Link href='/'>
            <Heading as='h1' fontSize={32} fontWeight='700' cursor='pointer' color='black'>
              MetaCartel
            </Heading>
          </Link>
        </Flex>
        <Box p={6}>
          <Image
            src='/chili-pixel.svg'
            width={32}
            height={32}
          />
        </Box>
      </HStack>
      <HStack
        alignItems='center'
        gap={6}
        flex={1}
        py={4}
        px={8}
        justifyContent='flex-end'
        color="brand.red"
      >
        {PAGE_PATHS.map(({ name, path }) => <Link href={path} key={name}>{name}</Link>)}
        <IconButton icon='key' title='Connect' color='brand.red' />
      </HStack>
    </Flex>
  )
}
