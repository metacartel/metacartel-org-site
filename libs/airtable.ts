import Airtable from "airtable"

const { AIR_API_KEY, BASE_ID, GRANTS_TABLE_NAME, EVENTS_TABLE_NAME } =
  process.env
const base = new Airtable({ apiKey: AIR_API_KEY }).base(BASE_ID)

const eventsTable = base(EVENTS_TABLE_NAME)
const grantsTable = base(GRANTS_TABLE_NAME)

const getMinifiedRecord = ({ id, fields }) => ({ id, fields })

const minifyRecords = (records) => records.map(getMinifiedRecord)

export { eventsTable, grantsTable, getMinifiedRecord, minifyRecords }
