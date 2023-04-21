export const config = {
  secrets: {
    jwt: 'healthconsulttest'
  },
  dbUrl:
    process.env.MONGODB_URL_TEST ||
    'mongodb://localhost:27016/health-consult-test'
}
