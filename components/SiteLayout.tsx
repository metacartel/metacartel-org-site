import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router"
import { Navbar, Footer } from "./"

interface SiteLayoutProps {
  children: React.ReactChild;
  minHeight?: string;
}

export const SiteLayout = ({ children, minHeight = "100vh" }: SiteLayoutProps) => {
  const { pathname } = useRouter()
  return (
    <Flex
      direction='column'
      overflowX='hidden'
      margin='0 auto'
      minHeight={minHeight}
      minWidth='100vw'
      position='relative'
      bg={'brand.black'}
    >
      <Flex
        direction='column'
        align='center'
        justify={'flex-start'}
        flex='1'
        minHeight={["100vh", "100vh", "0", "0"]}
      >
        <Navbar />
        <Flex
          height={'100%'}
          w={'100%'}
          direction={'column'}
        >
          
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};
