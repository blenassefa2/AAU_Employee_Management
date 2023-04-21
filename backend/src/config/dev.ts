export const config = {
  secrets: {
    jwt: 'healthconsultdev'
  },
  dbUrl:
    process.env.MONGODB_URL_DEV ||
    process.env.MONGODB_URL ||
    'mongodb://localhost:27016/health-consult-dev'
}
