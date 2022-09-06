import { minifyRecords, manifestoSignaturesTable } from "../../libs/airtable"

const getSignatures = (req, res) => {
    return new Promise((resolve, reject) => {
        try {
            const airtableData = []
            manifestoSignaturesTable
                .select({
                    view: "All Signatures",
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
            console.log("airtable signatures data", airtableData)
        } catch (err) {
            console.log(err)
            res.statusCode = 500
            res.json({ msg: "Something went wrong with requesting the grants data." })
        }
    })
}

export default getSignatures
