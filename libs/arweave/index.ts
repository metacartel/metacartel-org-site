// Arweave and Ethereum signing utilities -- modified  from verses-xyz/interdependence-web
import Arweave from "arweave"
import { originalManifesto } from "./originalManifesto"

function init() {
  return Arweave.init({
    host: "arweave.net",
    port: 443,
    protocol: "https",
    timeout: 20000,
    logging: false,
  })
}

const arweave = init()

export async function getManifesto(txId?) {
  if (!txId) {
    return originalManifesto
  }

  const res = {
    txId,
    data: {},
    sigs: [],
    status: 404,
  }

  const txStatus = await arweave.transactions.getStatus(txId)

  if (txStatus.status !== 200) {
    res.status = txStatus.status
    return res
  }
  const blockId = txStatus.confirmed.block_indep_hash
  const blockMeta = await arweave.blocks.get(blockId)
  const time = new Date(blockMeta.timestamp * 1000)

  const data = await arweave.transactions
    .getData(txId, { decode: true, string: true })
    .then((data) => JSON.parse(data as string))

  res.data = {
    ...data,
    timestamp: time.toLocaleDateString("en-US"),
  }

  res.status = 200
  return res
}
