import { NextApiHandler } from "next";
import Arweave from 'arweave';

const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
    timeout: 20000,
    logging: false,
});

const createTransaction: NextApiHandler = async (req, res) => {
    try {
        let key = { "kty": "RSA", "n": "zkKROBjxGU2kAYjBGKY0irYhN3r1oiF5TIZqZACPqjZpYzSn4EJ5X4DqoJVDycEeWlCToiluzVSNNH4hFPGKqbXTpfbzC3VEqXzaWCTiigoH-buyLZ2CwZCg5m0YnBILmF9ff8fjfCOVvIE_Snt9vCBro2-a_4CFKr-8qzhWYbWR4reh2MnvndWRsfd0YZGIfGinckFOvcR-u5M2cdK7FQDhaocGyMCb8_gGCiNhT1VAGjbhNmTUMNJvHA7xfGYjGmhLU5bxLbgcF35M7Y-78y5yMhiSrHwztte7_KtvZBfT9j4WyvkGFfXC-x7nV0nXFpVtLAdjHsWdI3m5-UGKmpY77AaCo49vyzM1k76GUc1_F-BFwE6nHuBjxdXhzGBSq4dhl-76pXC6FqH6DzCvFy2RrPQtfFNvDvnZo-MTuriDtmSQuIFySSC8rNuDc4P-fBWHVZoihAUKvUrTKry4DiJU-f4__Sejr6unBN_xXWlIU8QPGAp5J1bEvjClfXaeXti4D_zJN6mnKw2VD0KhCCs1awpOP7w8xDFzGpEp6XeBW5_yQ9iplK0RBrqWU14Hreb6fJ3R3BiFxNK9dohH9cdQ1ZKs_FZMfJwgS1Uxin1rLWWL9rD5pKYOablEumQrsk72GseYrKT-ze7Zi0KOE7y9hqwda1yvRqznovoDQt0", "e": "AQAB", "d": "Q6ch6ryDmEEXIkmwzFz3rue-TWxPVTaVirwr-VEVzka6moeS6MPk-6ZVTwamjW6Cfi0fv3jHlyG8jxMv1qbDTJcPLMirP37fXphNJcwzYgOYShl-f-fCE6tUmz_9anOgygG-WTM_MmCZpJLgJ5YJz8Lyi1D4DgYhp7vsLlz0OGhNyYdh1rGlnqeGelEoIziRA_1vrtIs-aGR0AShPwRXyLPZPA-98er7PDKGCJ1CNbtIo1CM3kKENt9PAm0EWEFIEklTK7--q7hPvoT2xpT2mPULD9NviJPUgoyQZHf2uWX3aDVFVJ4JmPpbUfL4_nCB1C5--IoTwOwgdppenZsZ0rNBxF0e49KjuEDjwzNGXlvsfCeZQShsW0wv5R6GN5ZodbUOK2uEXH-YgcvKz0ZktNNQrA_Nr7CsyhDHERx9Xh1C2cpsbrAIYlws3bpiX_6kfDh8vLlR1_nsud-JkzR_iQjMgECIoztoyj8TVtQftUJOygMU8gj4Wp-iF302rJEWnZH8qMZ-aibNOuLWf1UsGY4hfRpvMQ1Yk6BnZN5Qg6aJlwIigyZ8dgT71o_WOG4KgF5YAAj7SJn5En-3L7qIGalFyzfcNiONeEtpdQUkZBzBjaSxqvx0WaHBL0Wvse3V78T8bgKiVEqcTOhnPOSpFcnGzHf51Z_P0om-1uwT3AE", "p": "_AE2RgqI1fnK0hQRzwBNF7jIbs6FE7DLRSqsYMkkoNx8Snw6INaYVdidxke_zhdwUxE-yiw4hLUm8AbfYYcmV0wBLkfCmbDy-a5tkvCVUUr-is8XRtbo2I5K4KHySLm-Z-LyTDBasW9XsgeG14YtBOnuq9dY_TsA2jq_zE1fZBMgdX43jmiGfLt2YyOg2_5hE1jQX906dTczSWogJicovk5ksgi4UqaZPfDRORVy4ulMWObz57j_6UHINZcQYHPg7vf1tHo4eMOvBdP7skOtOPo4N6FDJUCBY67JLzo_Bu9MXF5DbX0OC5yIiIoXxpfKjlASCy7kbf2kYWaI3Y5a4Q", "q": "0YeyDKY0nuKUMGX15R648LcQzMTGZ6zTjV7P7NC_COrAFU-voAfyAAydS_gb7E99ylXBVQw6NFRoTjdanWMax4enVaayTZ0apcdXTSVGakmbfmsChEhyWhDu4vVCw_2UIXcpjY-KySPLQfbiE5VIkUolPTJBOF-MbefxojLYJP008sbRP4NEyY7LPqwYChV49EnYKnAfI0ZXKLCYyjheUTF4K9JtBijAia9c58UvURFxXD5tKmL2zHJtUCYerhImW-0pcnNiZ0HHSd4rcv1hBFmWTstcM8sqzva3_W3zuV32ib4CngisQnzDS5WayShe3qEE-46dfhxoWZagOLhDfQ", "dp": "QEbe3Qaa2FkaTnMoB7B_-Wj8Vqb-coNJlZ7I0Pb9DLqwSR9ehDm4KU1TENwEJED-OXHQniihUdgS0m4uU-Xw9ZtBQdiz3hewIddHw47xxwZl3mnr-fme8n14w8sKzVnzIvRT8PL0bwWDTLl2v0pN-U7hvZrz68M8-Gy7txSVHCV0xgMnkH9ArlfyXl8cDIDZqeGhZJI88uDdiAA1qwWZ8tB0BqUKvqoXtCDUfMbnwtDW1GY0GAqr24cX1fNuDewAl3NPjHUQKl1fKxFixZlVeY74_9d2FO5bEl3mmtE0ekRXKcgxUp_vES8f9BOk9NaKp7nsoEWZpiRn5SAOENTagQ", "dq": "i4g85rWMFz62BqDvplvWNt8CPgrQQVxTKTK5bm_4t7x0m_yL7Rs9ahD8cwnPtoedMi_3ZmaVICIRr_ymyGal_7fzlFNFK_ByPXHJTmODR-aquP4UF_mSxS2_l75SbuggTETplA7CEn5Wrh_1n6rrP23L7LvZuOvQPaSXQjdvvvor13zU_eGx3jPMX3kFLTntaWj_ngs6gSgnhL5NkWUGUjWKXExuNArRZR811FZ40xi1kAM2eWKcDbwp1ZT9G1iU2OTPlBsIrdCdITDlaFcZ02bBdMlyJj-my1p7XjZpdsj_E-1IGuuVo1UoTN5czJaozsMV6Vuov8G1L-vh2MPElQ", "qi": "D8S_HTvO7k11LH9euEmHeasQzJYinWRloemkGCCt8_BXxgXw4IJfsy1y2qVapkP2BxlwFUWaVB5iK9PudarNxZ1iA93heMt4KnvS3rFMGDhAmTfhrOoBmY4ndfx0G5OA_LztKvB7A73-yzPITlYL1okb1gyRYKQ7BLSKWO5w4mO9e6pkgAyxX09cODQCmhvuQteAm0kmCqTbthJ_5kqZNLR54KMkBBloi1vXt-JbxpjWW_d2Jt7y52G96SArkJEH66aMm-gbvIAQWWGoM4bSeULYT53Qc45QWTMI_Kl1bx3YCiCr59wTiCwSe9q49Tf9M-NYVKUV4bf-2CbcEIncPw" }

        let transaction = await arweave.createTransaction({
            data: JSON.stringify({
                authors: "Q, BurningFiat, Burrrata, MetaDreamer, Dekan",
                manifesto: `# Community first manifesto
                Our community comes first.We put our values, missions, and problems ahead of our solutions.
                Being community first means creating something people want to be a part of and can thrive in, it means silently sacrificing individual gains for the collective good, it means prioritizing long term positive - sum outcomes.The success of our communities will entirely depend on the strength of relationships that we help foster between not only ourselves, and but amongst community members.
                Being community firsts means that the relationships with each other as a community, are the most important resource we have.Our users, customers, investors, and community contributors are our peers: we are them and they are us.Oftentimes, this means allowing ourselves to be led by the community around us.It means that those around us are able to have input on key collective decisions.It means that our leaders are okay with not always being in charge. 
                Great communities are co - created together.
                Being community first is about building out in the open.You can only mobilize and empower a community to contribute when information flows efficiently and freely.Our future vision and direction are decentralized, iterative and driven by its members, not premeditated.Our success will emerge from the community’s own willingness to contribute, self organize and collaborate.Our strengths lie in being flexible and tolerate of the chaos that comes along with community ownership.
                Being community first means that we always strive to acknowledge and reward those who have contributed.We provide opportunities to value - aligned individuals who want to contribute no matter who they are or where they are from.We get excited when others create value before we can.We believe the project’s success is determined by the community members' standards. Not numbers nor anything else. We believe in community wellbeing, happiness, and productivity.
                Being community first is following our heart, using our head, and listening to our gut.
                If you want to go fast, go alone.If you want to go far, go together.`,
                timestamp: "April 2020"
            }),
        }, key);

        console.log('tx', transaction);
        transaction.addTag('Content-Type', 'application/json');
        transaction.addTag
        await arweave.transactions.sign(transaction, key);

        const response = await arweave.transactions.post(transaction);

        console.log(response);
        const url = transaction.id ? `https://arweave.net/${transaction.id}` : undefined;

        console.log('url', url)
        res.status(200).json({
            msg: "Success.",
            response: response,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            err: "Something went wrong with creating the document."
        });
    }
};

export default createTransaction;