// Metadata/SEO constants
export const METACARTEL = "MetaCartel"
export const SITE_NAME = "MetaCartel.org"
export const SITE_DESCRIPTION =
  "An ecosystem of creators and operators building and supporting at the forefront of web3 and DAOs"
export const SITE_URL = "https://metacartel.org"
export const SITE_IMAGE_URL = "/chiliface.svg"
export const SITE_IMAGE_ALT = "MetaCartel Chili"
export const FAVICON_PATH = "/favicon.ico"
export const TWITTER_ACCOUNT = "Meta_Cartel"

// Internal path names
export const ECOSYSTEM_NAME = "Ecosystem"
export const GRANTS_NAME = "Grants"
export const LORE_NAME = "Lore"
export const MANIFESTO_NAME = "Manifesto"

// Internal paths
export const ECOSYSTEM_PATH = "/ecosystem"
export const GRANTS_PATH = "/grants"
export const LORE_PATH = "/lore"
export const MANIFESTO_PATH = "/manifesto"

export const PHOTO_CAROUSEL_IMAGES_PATH = "/images/FamilyPhotos"

export const PAGE_PATHS = [
  {
    name: ECOSYSTEM_NAME,
    path: ECOSYSTEM_PATH,
  },
  {
    name: GRANTS_NAME,
    path: GRANTS_PATH,
  },
  {
    name: LORE_NAME,
    path: LORE_PATH,
  },
  {
    name: MANIFESTO_NAME,
    path: MANIFESTO_PATH,
  },
]

// External links
export const TWITTER_ACCOUNT_URL = `https://twitter.com/${TWITTER_ACCOUNT}`
export const DISCORD_INVITE_URL = "https://discord.gg/ABvyus73KG"
export const FORUM_URL = "http://forum.metacartel.org/"
export const DAOHAUS_URL =
  "https://app.daohaus.club/dao/0x64/0xb152b115c94275b54a3f0b08c1aa1d21f32a659a"
export const PRIMARY_GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0?cid=bWV0YWNhcnRlbGRhb0BnbWFpbC5jb20"
export const METACARTEL_DEWORK_URL = "https://app.dework.xyz/metacartel"

// External link names
export const TWITTER_NAME = "Twitter"
export const DISCORD_NAME = "Discord"
export const FORUM_NAME = "Forum"
export const DAOHAUS_NAME = "DAO"

export const SOCIAL_LINKS = [
  {
    name: TWITTER_NAME,
    url: TWITTER_ACCOUNT_URL,
  },
  {
    name: DISCORD_NAME,
    url: DISCORD_INVITE_URL,
  },
  {
    name: FORUM_NAME,
    url: FORUM_URL,
  },
  {
    name: DAOHAUS_NAME,
    url: DAOHAUS_URL,
  },
]

// Twitter constants
export const TWITTER_HANDLE = "Meta_Cartel"
export const TWITTER_ACCOUNT_ID = "1022327626428379136"
export const BASE_TWEET_URL = `https://twitter.com/${TWITTER_HANDLE}/status/`
export const MAX_TWITTER_RESULTS = 10
const reduceToCsv = (obj: { [key: string]: string }) =>
  Object.values(obj).reduce((a, b, i) => `${a}${i === 0 ? "" : ","}${b}`, "")
export const TWEET_FIELDS = {
  ATTACHMENTS: "attachments",
  IN_REPLY_TO_USER_ID: "in_reply_to_user_id",
  CREATED_AT: "created_at",
  ENTITIES: "entities",
}
export const TWEET_FIELD_CSV = reduceToCsv(TWEET_FIELDS)
export const MEDIA_FIELDS = {
  PREVIEW_IMAGE_URL: "preview_image_url",
  URL: "url",
}
export const MEDIA_FIELD_CSV = reduceToCsv(MEDIA_FIELDS)
export const EXPANSIONS = {
  ATTACHMENTS_MEDIA_KEYS: "attachments.media_keys",
  IN_REPLY_TO_USER_ID: "in_reply_to_user_id",
}
export const EXPANSION_CSV = reduceToCsv(EXPANSIONS)
export const USER_FIELDS = {
  NAME: "name",
}
export const USER_FIELD_CSV = reduceToCsv(USER_FIELDS)
