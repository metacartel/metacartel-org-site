import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router"
import { Navbar } from "./"

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
      background='black'
    >
      <Flex
        direction='column'
        align='center'
        justify={'flex-start'}
        flex='1'
        minHeight={["100vh", "100vh", "0", "0"]}
        background='brand.red'
      >
        <Flex
          height={'100%'}
          maxWidth={'1200px'}
          margin={'0 auto'}
          direction={'column'}
        >
          <Navbar />
          {children}
        </Flex>
      </Flex>
      {/* <Footer /> // can add a Footer if you have one */}
    </Flex>
  );
};
