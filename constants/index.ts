// Twitter constants
export const TWITTER_HANDLE = "Meta_Cartel"
export const TWITTER_ACCOUNT_ID = "1022327626428379136"
export const BASE_TWEET_URL = `https://twitter.com/${TWITTER_HANDLE}/status/`
export const MAX_TWITTER_RESULTS = 10
const reduceToCsv = (obj: { [key: string]: string }) =>
  Object.values(obj).reduce((a, b) => `${a},${b}`, "")
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
