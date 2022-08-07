import { minifyRecords, grantsTable } from "../../libs/airtable"

const getGrants = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      const airtableData = []
      grantsTable
        .select({
          view: "Grid view",
          //   sort: [{ field: "Created At", direction: "desc" }] // we may want to add a sort
        })
        .eachPage(
          (records, fetchNextPage) => {
            records.forEach((record) => {
              const recordData = {
                id: record.id,
                fields: record.fields,
              }
              airtableData.push(recordData)
            })
            fetchNextPage()
          },
          (error) => {
            if (error) {
              console.error(error)
              reject({ error })
              return
            }
            resolve(airtableData)
            const minifiedRecords = minifyRecords(airtableData)
            res.statusCode = 200
            res.json(minifiedRecords)
          }
        )
      console.log("airtable grants data", airtableData)
    } catch (err) {
      console.log(err)
      res.statusCode = 500
      res.json({ msg: "Something went wrong with requesting the grants data." })
    }
  })
}

export default getGrants
