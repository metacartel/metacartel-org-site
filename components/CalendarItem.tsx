import { Flex, HStack, Text, Box, Button, Grid, GridItem, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from "next/link"

export const CalendarItem = () => {
  return (
    <Flex flexDirection="column">
      <p><small>Every Tuesday, 12p EST</small></p>
      <h3>MetaCartel Townhall Taco Party</h3>
      <p>Catch up on latest haps in the DAO. <i>Members Only</i></p>
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
