import Arweave from 'arweave';

const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
    timeout: 20000,
    logging: false,
});

export default async (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            arweave.transactions.getStatus('OQugrqYLDQDRIzLtxaU0qJ26oSglN9XaDQ0iYm1MjlEnKSfqEZwPyK7xA9uRvrsK').then(res => {
                console.log(res);
                // {
                //  status: 200,
                //  confirmed: {
                //    block_height: 140151,
                //    block_indep_hash: 'OR1wue3oBSg3XWvH0GBlauAtAjBICVs2F_8YLYQ3aoAR7q6_3fFeuBOw7d-JTEdR',
                //    number_of_confirmations: 20
                //  }
                //}
            })
            // arweave.wallets.getBalance('p97JHJXIapbvoajkKj23KFxdjA5xA1b2u7irr8Nn8pc').then((balance) => {
            //     let winston = balance;
            //     let ar = arweave.ar.winstonToAr(balance);
            //     res.status(200).json(ar)
            // })
        } catch (err) {
            console.log(err)
            res.statusCode = 500
            res.json({
                msg: "Something went wrong with requesting the Arweave data.",
            })
        }
    })
}