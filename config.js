module.exports  = {
    PORT:process.env.PORT || 8082,
    TOKEN_SECRET:process.env.TOKEN_SECRET || '-write-yr-secret',
    MONGO_URL:process.env.MONGO_URL || "-local-mongo",
    AUTH_TOKEN_NAME:'x-slomo-auth'
}