const allowedOrigins: string[] = [
  "https://www.yoursite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
  "http://localhost:3000",
  "http://localhost:19006",
  "https://final-project-nine-pi.vercel.app/",
  "https://final-project-hmgwa5qxd-blenassefa2.vercel.app/",
];

const corsOptions = {
  origin: (origin: string, callback: (arg0: Error, arg1: boolean) => void) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
