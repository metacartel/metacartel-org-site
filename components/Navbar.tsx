import { Flex, HStack, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from "next/link"

const paths = [
  {
    label: 'Ecosystem',
    path: '/ecosystem',
  },
  {
    label: 'Grants',
    path: '/grants',
  },
  {
    label: 'Manifesto',
    path: '/manifesto',
  },
  {
    label: 'Lore',
    path: '/lore',
  },
]
export const NavBar = () => {
  const border = '6px solid black'
  return (
    <Flex
      bg="black"
      direction={{base: 'column-reverse', lg: 'row'}}
      alignItems='center'
      borderBottom={border}
    >
      <HStack alignItems='center' justifyContent='center' flex={1} bg="white" height="100%" w={{base: '100%', lg: 'auto'}}>
        <Flex flex={1} p={6} borderEnd={border}>
          <Text fontFamily='basteleur' fontSize={32} fontWeight='700'>MetaCartel</Text>
        </Flex>
        <Box p={6} ms={-40}>
          <Image
            src='/chili-pixel.svg'
            width={32}
            height={32}
          />
        </Box>
      </HStack>
      <HStack alignItems='center' gap={6} flex={1} py={6} px={8} justifyContent='flex-end' color="brand.red">
        {paths.map(({label, path}) => (
          <Link href={path} key={label}>
            <Text fontFamily='basteleur' fontSize={16} cursor='pointer'>{label}</Text>
          </Link>
        ))}
        <Box
          id="convert-me-to-button-component"
          borderWidth={1}
          borderColor="brand.red"
          borderStyle={'solid'}
          px={4}
          py={2}
          whiteSpace="nowrap"
        >🔑 Connect</Box>
      </HStack>
    </Flex>
  )
}
