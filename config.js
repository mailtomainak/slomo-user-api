module.exports  = {
    PORT:process.env.PORT || 8082,
    TOKEN_SECRET:process.env.TOKEN_SECRET || 'SECRET',
    MONGO_URL:process.env.MONGODB_URI || "MONGODB_URI",
    AUTH_TOKEN_NAME:'x-slomo-auth'
}