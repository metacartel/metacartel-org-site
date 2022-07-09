import Airtable from "airtable"

const base = new Airtable({ apiKey: process.env.AIR_API_KEY }).base(
  process.env.BASE_ID
)

const grantsTable = base(process.env.GRANTS_TABLE_NAME)

const getMinifiedRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  }
}

const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record))
}

export { grantsTable, getMinifiedRecord, minifyRecords }
