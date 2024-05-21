import { ctrlUser } from "./controller";
import { Router } from "express";

const router = Router();

router.post("/create", ctrlUser.createUser);
router.post("/auth", ctrlUser.authUser);

export default router;