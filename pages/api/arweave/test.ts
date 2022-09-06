import Arweave from 'arweave';

const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
    timeout: 20000,
    logging: false,
});

arweave.wallets.getBalance('p97JHJXIapbvoajkKj23KFxdjA5xA1b2u7irr8Nn8pc').then((balance) => {
    let ar = arweave.ar.winstonToAr(balance);

    console.log(ar);
    //0.125213858712
});
