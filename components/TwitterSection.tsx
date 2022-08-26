import { Flex, FlexProps, Text, Image, Link, LinkProps } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { Section } from "./"
import { TWITTER_HANDLE, BASE_TWEET_URL } from "../constants"
import { getData } from "../utils"

interface Annotation {
  start?: number
  end?: number
  probability?: number
  type?: string
  normalized_text?: string
}

interface Tag {
  start: number
  end: number
  tag: string
}

interface Url {
    start: number
    end: number
    url: string
    expanded_url: string
    display_url: string
    status: string
    title: string
    description: string
    unwound_url: string
}
interface Entity {
  annotations?: Annotation[]
  cashtags?: Tag[]
  hashtags?: Tag[]
  mentions?: Tag[]
  urls?: Url[]
}

interface Attachment {
  [key: string]: any;
}

interface Tweet {
  text: string
  id: string 
  created_at: string
  entities?: Entity[]
  attachments?: Attachment[]
}

interface TweetProps extends LinkProps {
  tweet: Tweet
}

const Tweet: React.FC<TweetProps> = ({ tweet: { created_at, text, id }, ...props }) => {
  return (
    <Link
      as="a"
      href={`${BASE_TWEET_URL}${id}`}
      _hover={{ textDecoration: 'none', transform: 'scale(1.05)' }}
      isExternal
      {...props}
    >
      <Flex gap={2} borderBottom="1px" borderColor="blackAlpha.500" py={6}>
        <Image src='/images/meta-cartel-twitter.jpeg' height={10} width={10} borderRadius='full' />
        <Flex direction='column' fontFamily='manrope'>
          <Text as='span' color="gray.700">
            <Text as='span' fontWeight='bold' color='fg'>
              MetaCartel
            </Text>
            &nbsp;@{TWITTER_HANDLE} • {new Date(created_at).toLocaleDateString('en')}</Text>
          <Text as='span'>{text}</Text>
        </Flex>
      </Flex>
    </Link>
  )
}
export const TwitterSection: React.FC<FlexProps> = (props) => {
  const [data, setData] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ;(async () => {
      const data: Tweet[] = await getData("api/tweets")
      setData(data)
      setLoading(false)
    })()
  }, [])
  return (
    <Section
      bgColor='brand.red'
      bgImage='url(/images/chili-bg-tile.svg)'
      bgPosition='center'
      display="flex"
      justifyContent='flex-end'
      px={{ base: 8, md: 32 }}
      py={{ base: 8, md: 16 }}
      {...props}
    >
      <Flex
        height="420px"
        maxW={{ base: '100%', sm: 420}}
        w="100%"
        border="8px"
        borderColor="fg"
        color="fg"
        bg="bg"
        px={{ base: 4, md: 6 }}
        overflowY="scroll"
        direction="column"
      >
        <Text
          as="h2"
          fontFamily="body"
          fontWeight="bold"
          fontSize='2xl'
          borderBottom="2px" borderColor="fg"
          lineHeight="300%"
        >
          MetaCartel Tweets
        </Text>
        {loading && <Flex py={6} fontSize="2xl">Harvesting chilis...</Flex>}
        {data.map((tweet: Tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
      </Flex>
    </Section>
  )
}
