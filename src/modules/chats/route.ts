import { ctrlChat } from "./controller";
import { Router } from "express";

const router = Router();

router.get("/search-chat-byid", ctrlChat.searchChatsByUser);
router.post("/register", ctrlChat.registerChat);

export default router;