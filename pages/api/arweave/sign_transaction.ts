import { NextApiHandler } from "next";
import signArweaveTransaction from "../../../libs/arweave/signArweaveTransaction";
import { manifestoSignaturesTable } from "../../../libs/airtable";


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

        const arweaveSignatureResponse = await signArweaveTransaction(documentId, address, name, '', signature, false)
        const airtableRecordResponse = await manifestoSignaturesTable.create({
            "Address": address,
            "Signature": signature,
        });

        const response = {
            arweaveSignatureResponse,
            airtableRecordResponse
        }
        console.log('response', response)
        res.status(200).json(response)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            err: "Something went wrong with signing the manifesto."
        });
    }
};

export default signTransaction;
