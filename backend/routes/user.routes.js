import express from "express";
import { getUsers } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();
router.get("/", isAuthenticated, getUsers);

export default router;
