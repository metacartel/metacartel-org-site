import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import SiteLayout from "../components/SiteLayout";
import theme from "../theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
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
              url: "/vercel.svg", //replcace with your OG image
              width: 1200,
              height: 630,
              alt: "Alt text for logo",
            },
          ],
        }}
      />
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ChakraProvider>
  );
};
export default MyApp;
