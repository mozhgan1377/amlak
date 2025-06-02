import express from "express";
import {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { protect, authorize } from "../middlewares/authMiddleware.js";
import ROLES from "../constants/roles.js";

const router = express.Router();

router.use(protect);

router.get("/", authorize([ROLES.Admin]), getAllUsers);
router.get("/:id", authorize([ROLES.Admin]), getUserById);
router.put("/:id", authorize([ROLES.Admin]), updateUser);
router.delete("/:id", authorize([ROLES.Admin]), deleteUser);

export default router;
