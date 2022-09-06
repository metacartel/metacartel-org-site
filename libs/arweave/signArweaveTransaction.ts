import Arweave from 'arweave';

const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
    timeout: 20000,
    logging: false,
});

const KEY = JSON.parse(process.env.ARWEAVE_KEY)
const DOC_TYPE = "manifesto_doc_type"
const DOC_ORIGIN = "manifesto_doc_origin"
const DOC_REF = "manifesto_doc_ref"
const SIG_NAME = "manifesto_sig_name"
const SIG_HANDLE = "manifesto_sig_handle"
const SIG_ADDR = "manifesto_sig_addr"
const SIG_ISVERIFIED = "manifesto_sig_verified"
const SIG_SIG = "manifesto_sig_signature"
const VERIFICATION_HANDLE = "manifesto_verif_handle"
const VERIFICATION_ADDR = "manifesto_verif_addr"

async function signArweaveTransaction(documentId, address, name, handle, signature, isVerified) {
    let transaction = await arweave.createTransaction({ data: address }, KEY)
    transaction.addTag(DOC_TYPE, 'signature')
    transaction.addTag(DOC_REF, documentId)
    transaction.addTag(SIG_NAME, name)
    transaction.addTag(SIG_HANDLE, handle)
    transaction.addTag(SIG_ADDR, address)
    transaction.addTag(SIG_SIG, signature)
    transaction.addTag(SIG_ISVERIFIED, isVerified)
    await arweave.transactions.sign(transaction, KEY)
    const transactionResponse = await arweave.transactions.post(transaction)
    return transactionResponse
}

export default signArweaveTransaction;