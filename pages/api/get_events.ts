import { google } from "googleapis"

export default async (req, res) => {
  const { GOOGLE_API_KEY, GOOGLE_CALENDAR_ID } = process.env
  return new Promise(async () => {
    try {
      // Initialize google calendar v3 api
      const calendar = google.calendar({ version: "v3", auth: GOOGLE_API_KEY })
      // Get events from calendar
      const events = await calendar.events.list({
        calendarId: GOOGLE_CALENDAR_ID,
        timeMin: new Date().toISOString(),
        maxResults: 15,
        singleEvents: true,
        orderBy: "startTime",
      })
      // Return events
      res.statusCode = 200
      res.json(events.data.items)
    } catch (error) {
      console.log(error)
      res.statusCode = 500
      res.json({
        msg: "Something went wrong with requesting the grants data.",
      })
    }
  })
}
