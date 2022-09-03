import { NextApiHandler } from "next";


const signTransaction: NextApiHandler = async (req, res) => {
    const {
        address, name
    } = req.body;

    try {
        console.log('address', address)
        console.log('name', name)

        res.status(200).json({
            msg: "Success.",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            err: "Something went wrong with signing the manifesto."
        });
    }
};

export default signTransaction;
