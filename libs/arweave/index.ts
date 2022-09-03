// Arweave and Ethereum signing utilities -- forked from verses-xyz/interdependence-web
import Arweave from 'arweave';
import { ethers } from "ethers";
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


const ADMIN_ACCT = "aek33fcNH1qbb-SsDEqBF1KDWb8R1mxX6u4QGoo3tAs";
const DOC_TYPE = "interdependence_doc_type";
const DOC_ORIGIN = "interdependence_doc_origin";
const DOC_REF = "interdependence_doc_ref";
const SIG_NAME = "interdependence_sig_name";
const SIG_HANDLE = "interdependence_sig_handle";
const SIG_ADDR = "interdependence_sig_addr";
const SIG_ISVERIFIED = "interdependence_sig_verified";
const SIG_SIG = "interdependence_sig_signature";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8080";


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

    if (txStatus.status !== 200) {
        res.status = txStatus.status;
        return res;
    }

    const transactionMetadata = await arweave.transactions.get(txId);
    // const tags = transactionMetadata.get('tags').reduce((prev, tag) => {
    //     let key = tag.get('name', { decode: true, string: true });
    //     prev[key] = tag.get('value', { decode: true, string: true });
    //     return prev;
    // }, {});

    // ensure correct type, return undefined otherwise
    // if (!(DOC_TYPE in tags) || !['document', 'declaration'].includes(tags[DOC_TYPE])) {

    //     return res;
    // }


    // otherwise metadata seems correct, go ahead and fetch
    const blockId = txStatus.confirmed.block_indep_hash;
    const blockMeta = await arweave.blocks.get(blockId);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const time = new Date(blockMeta.timestamp * 1000);
    const data = JSON.parse(await arweave.transactions.getData(txId, {
        decode: true,
        string: true,
    }));

    data.body = data.document || data.declaration // backwards compatability

    res.data = {
        ...data,
        timestamp: time.toLocaleDateString('en-US', options),
        // ancestor: tags[DOC_ORIGIN],
    };

    res.status = 200;
    console.log('res', res)
    return res;
}