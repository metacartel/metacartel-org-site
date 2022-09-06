// Arweave and Ethereum signing utilities -- modified  from verses-xyz/interdependence-web
import Arweave from 'arweave';
import { originalManifesto } from "./originalManifesto";

function init() {
    return Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
        timeout: 20000,
        logging: false,
    });
}

const arweave = init();

export async function getManifesto(txId?) {
    if (!txId) {
        return originalManifesto
    }

    const res = {
        txId,
        data: {},
        sigs: [],
        status: 404,
    };

    const txStatus = await arweave.transactions.getStatus(txId);

    console.log("txStatus", txStatus);

    if (txStatus.status !== 200) {
        res.status = txStatus.status;
        return res;
    }

    const transactionMetadata = await arweave.transactions.get(txId);
    const tags = transactionMetadata.get('tags').reduce((prev, tag) => {
        let key = tag.get('name', { decode: true, string: true });
        prev[key] = tag.get('value', { decode: true, string: true });
        return prev;
    }, {});

    // ensure correct type, return undefined otherwise
    // if (!(DOC_TYPE in tags) || !['document', 'declaration'].includes(tags[DOC_TYPE])) {
    //     console.log('firing')
    //     return res;
    // }

    console.log('tags', tags)

    // otherwise metadata seems correct, go ahead and fetch
    const blockId = txStatus.confirmed.block_indep_hash;
    const blockMeta = await arweave.blocks.get(blockId);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const time = new Date(blockMeta.timestamp * 1000);
    // const data = JSON.parse(await arweave.transactions.getData(txId, {
    //     decode: true,
    //     string: true,
    // }));
    const data = await arweave.transactions.getData(txId, { decode: true, string: true }).then(data => JSON.parse(data))

    res.data = {
        ...data,
        timestamp: time.toLocaleDateString('en-US'),
    };

    res.status = 200;
    console.log('res', res)
    return res;
}