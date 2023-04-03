import { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_IMAGE_URL,
  TWITTER_ACCOUNT,
  FAVICON_PATH,
} from "../constants"

interface Props {
  title?: string
  description?: string
  image?: string
}

export const PageMetadata: FC<Props> = ({ title, description, image }) => {
  const router = useRouter()
  const { asPath } = router
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const defaultOgImage = `${SITE_URL}/${SITE_IMAGE_URL}`
  const siteDescription = description ?? SITE_DESCRIPTION
  const twitterHandle = `@${TWITTER_ACCOUNT}`
  const { href: pageUrl } = new URL(asPath, SITE_URL)
  const ogImage = !image
    ? defaultOgImage
    : image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="image" content={ogImage} />
      {/* OpenGraph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:url" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta property="og:image:type" content="image/png" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${ogImage}`} />
      {/* Favicon */}
      <link rel="icon" href={FAVICON_PATH} />
      <link rel="canonical" href={pageUrl} />
    </Head>
  )
}
