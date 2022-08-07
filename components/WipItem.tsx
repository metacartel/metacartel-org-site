import { Flex, HStack, Text, Box, Button, Grid, GridItem, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from "next/link"

export const WipItem = () => {
  return (
    <Flex flexDirection="column">
      <p><small>Status: MEME</small></p>
      <h3>MetaMedia</h3>
      <p>Content creation in support of the cartel culture.</p>
        <Button
          as='a'
          borderWidth={1}
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
  )
}
