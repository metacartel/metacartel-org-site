import { NextApiHandler } from "next";
import signArweaveTransaction from "../../../libs/arweave/signArweaveTransaction";


const signTransaction: NextApiHandler = async (req, res) => {
    console.log('signing transaction api')
    const documentId = process.env.NEXT_PUBLIC_ARWEAVE_TX_ID
    const {
        address, name
    } = req.body;

    try {
        const {
            name,
            address,
            handle,
            signature,
        } = req.body

        console.log('address', address)
        console.log('name', name)
        console.log('signature', signature)
        const signatureResponse = await signArweaveTransaction(documentId, address, name, '', signature, false)
        console.log('signatureResponse', signatureResponse)
        res.status(200).json(signatureResponse)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            err: "Something went wrong with signing the manifesto."
        });
    }
};

export default signTransaction;
