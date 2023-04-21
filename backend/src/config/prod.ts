export const config = {
  secrets: {
    jwt: 'healthconsultprod'
  },
  dbUrl:
    process.env.MONGODB_URL_PROD ||
    'mongodb://localhost:27016/health-consult-prod'
}
