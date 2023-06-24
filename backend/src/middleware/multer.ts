import multer from "multer";

export const upload = multer({
  storage: multer.diskStorage({
    destination: "./uploads",
    // filename: (file, cb) => {
    //   cb(null, file.originalname);
    // },
  }),
});
