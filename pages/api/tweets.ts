// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const { TWITTER_BEARER_TOKEN } = process.env
  const headers: HeadersInit = new Headers()
  headers.append("Authorization", `Bearer ${TWITTER_BEARER_TOKEN}`)

  const requestOptions: RequestInit = { method: "GET", headers }
  const metaCartelTwitterAccount = "1022327626428379136"
  const maxResults = 10
  return new Promise(async (resolve, reject) => {
    try {
      const response: Response = await fetch(
        `https://api.twitter.com/2/users/${metaCartelTwitterAccount}/tweets?max_results=${maxResults}&tweet.fields=attachments,in_reply_to_user_id,created_at,entities&media.fields=preview_image_url,url&expansions=attachments.media_keys,in_reply_to_user_id&user.fields=name`,
        requestOptions
      )
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
        msg: "Something went wrong with requesting the grants data.",
      })
    }
  })
}
