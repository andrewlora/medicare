import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getUsers);
router.get("/:id", authenticate, restrict(["patient"]), getUser);
router.put("/:id", authenticate, restrict(["admin"]), updateUser);
router.delete("/:id", authenticate, restrict(["admin"]), deleteUser);

export default router;
