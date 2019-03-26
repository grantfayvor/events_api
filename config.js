module.exports = {
    dev: {
        server: {
            protocol: "http",
            address: "127.0.0.1",
            port: "3000"
        },
        client: {
            protocol: "http",
            address: "127.0.0.1",
            port: "8080",
            urlPrefix: "/_events/v1"
        },
        database: {
            name: "event_manager",
            address: "127.0.0.1",
            port: "27017",
            username: "",
            password: ""
        },
        auth: {
            google: {
                clientId: "428582949722-v17j8ui14nlllen167cqo6h1f7ipd6p3.apps.googleusercontent.com",
                projectId: "events-235517",
                authURI: "https://accounts.google.com/o/oauth2/auth",
                tokenURI: "https://oauth2.googleapis.com/token",
                authProviderX509CertURL: "https://www.googleapis.com/oauth2/v1/certs",
                clientSecret: "jNMLGPkxPdnRfNGdeaukkium",
                callbackURL: "/auth/google/callback"
            }
        }
    }
}