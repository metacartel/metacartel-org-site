import { NextApiHandler } from "next";
import signArweaveTransaction from "../../../libs/arweave/signArweaveTransaction";


const signTransaction: NextApiHandler = async (req, res) => {
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
        const signatureResponse = await signArweaveTransaction(documentId, address, name, '', signature, false).then((data) => res.json(data))
    } catch (error) {
        console.error(error);
        res.status(500).json({
            err: "Something went wrong with signing the manifesto."
        });
    }
};

export default signTransaction;
