import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { Fonts, SiteLayout } from "../components";
import Head from "next/head";
import '../styles/globals.css'

const title = "MetaCartel"
const site_name = "MetaCartel.org"
const description = "An ecosystem of creators and operators building and supporting at the forefront of web3 and DAOs"
const url = "https://metacartel.org"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          rel="preload"
          href="/fonts/MexicanTequila/MexicanTequila.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/MexicanTequila/MexicanTequila-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/basteleur/Basteleur-Moonlight.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/basteleur/Basteleur-Bold.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <DefaultSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url,
          site_name,
          title,
          description,
          images: [
            {
              url: "/chiliface.svg", 
              width: 1200,
              height: 630,
              alt: "MetaCartel Chili",
            },
          ],
        }}
      />
      <Fonts />
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ChakraProvider>
  );
};
export default MyApp;
