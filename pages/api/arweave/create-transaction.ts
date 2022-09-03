// import { NextApiHandler } from "next";
// import Arweave from 'arweave';

// const arweave = Arweave.init({
//     host: 'arweave.net',
//     port: 443,
//     protocol: 'https',
//     timeout: 20000,
//     logging: false,
// });

// const createTransaction: NextApiHandler = async (req, res) => {
//     const {
//         address, name
//     } = req.body;
//     try {
//         let key = JSON.parse(process.env.ARWEAVE_KEY)
//         // async function signDocumentAr(documentId, address, name, handle, signature, isVerified) {
//         let transaction = await arweave.createTransaction({ data: address }, KEY)
//         transaction.addTag(DOC_TYPE, 'signature')
//         transaction.addTag(DOC_REF, documentId)
//         transaction.addTag(SIG_NAME, name)
//         transaction.addTag(SIG_HANDLE, handle)
//         transaction.addTag(SIG_ADDR, address)
//         transaction.addTag(SIG_SIG, signature)
//         transaction.addTag(SIG_ISVERIFIED, isVerified)
//         await arweave.transactions.sign(transaction, KEY)
//         return await arweave.transactions.post(transaction)
//     }
// } catch (error) {
//     console.error(error);
//     res.status(500).json({
//         err: "Something went wrong with creating the document."
//     });
// }
// };

// export default signTransaction;