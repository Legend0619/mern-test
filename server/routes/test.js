import express from "express";
import multer from "multer";
import {
  getAllTests,
  addTest,
  takeTest,
  getLogs,
} from "../controllers/test.js";
import auth from "../middleware/auth.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();
//          Routes And Actions
router.get("/getAllTests", auth, getAllTests);
router.post("/addTest", auth, upload.single("image"), addTest);
router.post("/takeTest", auth, takeTest);
router.get("/getLogs", auth, getLogs);
export default router;
