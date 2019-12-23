export default {
    /**
     * Creates a credential object
     * 
     * @returns credential
    */
    register: async function () {
        let randomStringFromServer = "coucoutoi";
        const publicKeyCredentialCreationOptions = {
            challenge: Uint8Array.from(randomStringFromServer, c =>
                c.charCodeAt(0)
            ),
            rp: {
                name: "Authentificator",
                id: "localhost"
            },
            user: {
                id: Uint8Array.from("UZSL85T9AFC", c => c.charCodeAt(0)),
                name: "mathieu@testmail.com",
                displayName: "Mathieu"
            },
            pubKeyCredParams: [{ alg: -7, type: "public-key" }],
            authenticatorSelection: {
                authenticatorAttachment: "cross-platform"
            },
            timeout: 60000,
            attestation: "direct"
        };
    
        const credential = await navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions
        });
        return credential
    }
}