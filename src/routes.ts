import routesMessage from "./modules/messages/route";
import routesUser from "./modules/user/route";
import routesChat from "./modules/chats/route";
import { Router } from "express";

const router = Router();

router.use("/api", ((req, res) => res.send("API-REST ON 🟢")));
router.use("/message", routesMessage);
router.use("/user", routesUser);
router.use("/chat", routesChat);

export default router;