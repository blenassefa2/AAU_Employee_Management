const allowedOrigins: string[] = [
  "https://www.yoursite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
  "http://localhost:3000",
  "http://localhost:19006",
  "http://192.168.56.1:8000",
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
