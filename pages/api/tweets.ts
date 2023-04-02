// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  TWITTER_ACCOUNT_ID,
  TWEET_FIELD_CSV,
  MAX_TWITTER_RESULTS,
  MEDIA_FIELD_CSV,
  USER_FIELD_CSV,
  EXPANSION_CSV,
} from "../../constants"

const tweetsApi = async (req, res) => {
  const { TWITTER_BEARER_TOKEN } = process.env
  const headers: HeadersInit = new Headers()
  headers.append("Authorization", `Bearer ${TWITTER_BEARER_TOKEN}`)

  const requestOptions: RequestInit = { method: "GET", headers }
  const endpointUrl =
    `https://api.twitter.com/2/users/${TWITTER_ACCOUNT_ID}/tweets` +
    `?max_results=${MAX_TWITTER_RESULTS}` +
    `&tweet.fields=${TWEET_FIELD_CSV}` +
    `&media.fields=${MEDIA_FIELD_CSV}` +
    `&expansions=${EXPANSION_CSV}` +
    `&user.fields=${USER_FIELD_CSV}`
  return new Promise(async (resolve, reject) => {
    try {
      const response: Response = await fetch(endpointUrl, requestOptions)
      if (response.status < 200 || response.status >= 300) {
        req.status = response.status
        req.body = response.statusText
        return
      }
      const { data } = JSON.parse(await response.text())
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
      res.statusCode = 500
      res.json({
        msg: "Something went wrong with requesting the tweet data.",
      })
    }
  })
}

export default tweetsApi
