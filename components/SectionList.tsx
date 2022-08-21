import { Box, Flex, Button } from '@chakra-ui/react'
import { Section, IconHeading, IconHeadingProps } from "./"

interface SectionListProps extends IconHeadingProps {
  pageUrl?: string
}
export const SectionList: React.FC<SectionListProps> = ({ icon, title, color, pageUrl, children, ...props }) => {
  return (
    <Section
      maxW="container"
      display="flex"
      flexDirection="column"
      gap={{ base: '1.5rem', md: '3rem' }}
      {...props}
    >
      <Flex flexWrap='wrap' justifyContent='space-between' w='100%'>
        <IconHeading fontSize="xl" icon={icon} title={title} color={color} me='auto'/>
        {pageUrl && <Button
          href={pageUrl}
          as='a'
          borderWidth={2}
          borderColor={color}
          borderStyle='solid'
          px={4}
          py={2}
          whiteSpace='nowrap'
          bg='none'
          cursor='pointer'
          color={color}
          _hover={{ bg: 'fg', color: 'bg' }}
        >
          View more
        </Button>}
      </Flex>
      <Box w='100%'>
        {children}
      </Box>
    </Section>
  )
}