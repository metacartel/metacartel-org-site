import { Box, Flex, Button } from "@chakra-ui/react"
import { Section, IconHeading, IconHeadingProps } from "./"

interface EcosystemSection {
  children?: React.ReactNode
}
export const EcosystemSection: React.FC<EcosystemSection> = ({
  children,
  ...props
}) => {
  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      bgColor="black"
      gap={{ base: "1.5rem", md: "3rem" }}
      padding={25}
      maxW="container"
      mx="auto"
      {...props}
    >
      <Box w="100%" border="1px solid" borderColor="brand.green">
        {children}
      </Box>
    </Box>
  )
}
