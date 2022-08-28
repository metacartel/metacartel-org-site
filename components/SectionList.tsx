import { Box, Flex, Button, Link } from '@chakra-ui/react'
import { Section, IconHeading, IconHeadingProps } from "./"

interface SectionListProps extends IconHeadingProps {
  pageUrl?: string
  linkLabel?: string
}
export const SectionList: React.FC<SectionListProps> = ({ icon, title, color, pageUrl, linkLabel, children, ...props }) => {
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
        {pageUrl && <Link
          href={pageUrl}
          px={4}
          py={2}
          whiteSpace='nowrap'
          bg='none'
          cursor='pointer'
          color={color}
          fontWeight="bold"
          _hover={{ bg: color, color: 'fg' }}
          isExternal={pageUrl.startsWith('http')}
        >
          {linkLabel || 'View more'}
        </Link>}
      </Flex>
      <Box w='100%'>
        {children}
      </Box>
    </Section>
  )
}