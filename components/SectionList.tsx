import { Box, Flex, Button } from '@chakra-ui/react'
import { Section, IconHeading, IconHeadingProps } from "./"

interface SectionListProps extends IconHeadingProps {
  pageUrl: string
}
export const SectionList: React.FC<SectionListProps> = ({ icon, title, color, pageUrl, children, ...props }) => {
  return (
    <Section
      maxW="container"
      w="100%"
      display="flex"
      flexDirection="column"
      bgColor="black"
      gap={{base: '1.5rem', md: '3rem'}}
      {...props}   
    >
      <Flex direction={{base: 'column', md: 'row'}} justifyContent='space-between' w='100%'>
        <IconHeading icon={icon} title={title} color={color} me='auto'/>
        <Button
          href={pageUrl}
          as='a'
          borderWidth={2}
          borderColor="brand.black"
          borderStyle={'solid'}
          px={4}
          py={2}
          whiteSpace="nowrap"
          bg='none'
          cursor='pointer'
          color={color}
          _hover={{bg: 'brand.black', color: 'white'}}
        >
          View more
        </Button>
      </Flex>
      <Box w='100%'>
        {children}
      </Box>
    </Section>
  )
}