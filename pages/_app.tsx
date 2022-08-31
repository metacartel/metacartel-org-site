import { DefaultSeo } from "next-seo"
import Head from "next/head"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { WagmiConfig } from "wagmi"
import { wagmiClient, chains } from "../utils/web3"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import { SiteLayout } from "../components"
import {
  METACARTEL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_IMAGE_URL,
  SITE_IMAGE_ALT,
} from "../constants"

import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <DefaultSeo
            title={METACARTEL}
            description={SITE_DESCRIPTION}
            canonical={SITE_URL}
            openGraph={{
              type: "website",
              locale: "en_IE",
              url: SITE_URL,
              site_name: SITE_NAME,
              title: METACARTEL,
              description: SITE_DESCRIPTION,
              images: [
                {
                  url: SITE_IMAGE_URL,
                  width: 1200,
                  height: 630,
                  alt: SITE_IMAGE_ALT,
                },
              ],
            }}
          />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" type="image/x-icon" href="/favicon.png" />
          </Head>
          <SiteLayout>
            <Component {...pageProps} />
          </SiteLayout>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}
export default MyApp
