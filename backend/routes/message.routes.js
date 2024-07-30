import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();
router.post("/send/:id", isAuthenticated, sendMessage);
router.get("/:id", isAuthenticated, getMessages);

export default router;
