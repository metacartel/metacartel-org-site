export function dedupe(signatures, signatureAddress, verifedSignature) {
    const unique_set = signatures.reduce((total, current) => {
        if (!total.hasOwnProperty(current.signatureAddress)) {
            total[current.signatureAddress] = current
        } else {
            const oldSignature = total[current.signatureAddress]
            if (current.verifedSignature || !oldSignature.verifedSignature) {
                total[current.signatureAddress] = current
            }
        }
        return total
    }, {})
    return Object.values(unique_set)
}