import * as CryptoJS from 'crypto-js';

export function MarvelAuthParams() {
    const ts = new Date().getTime().toString();
    const pubKey ="f5b64dfdbc5e61651a33b68f8ee7b6c3";
    const privKey = "47de8ef7b60e182883f8e0ff8ddd42f18e75ec58";


    const hash = CryptoJS.MD5((ts + privKey + pubKey).toString());

    return {
        ts, 
        apikey: pubKey,
        hash: hash
    }
}