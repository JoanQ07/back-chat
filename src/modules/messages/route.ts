import { ctrlMessage } from "./controller";
import { Router } from "express";

const router = Router();

router.get("/search-messages-byid", ctrlMessage.searchMessagesByChat);
router.post("/register", ctrlMessage.registerChat);
router.get("/delete-all", ctrlMessage.deleteAll);

export default router;