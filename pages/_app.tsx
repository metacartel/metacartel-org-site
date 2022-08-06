import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import SiteLayout from "../components/SiteLayout";
import theme from "../theme";
import Fonts from "../components/Fonts";
import Head from "next/head";

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
        title='Site title'
        description='Site description.'
        canonical='https://site-url'
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://site-url",
          site_name: "Site title",
          title: "Site title",
          description: "Site description.",
          images: [
            {
              url: "/vercel.svg", //replace with your OG image
              width: 1200,
              height: 630,
              alt: "Alt text for logo",
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
