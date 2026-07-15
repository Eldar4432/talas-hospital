import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/news");
  },

  filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadNews = multer({ storage });

export default uploadNews;
