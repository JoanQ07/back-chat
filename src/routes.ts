import routesNotification from "./modules/notifications/route";
import routesMessage from "./modules/messages/route";
import routesFriend from "./modules/friends/route";
import routesChat from "./modules/chats/route";
import routesUser from "./modules/user/route";
import { Router } from "express";

const router = Router();

router.use("/api", ((req, res) => res.send("API-REST ON 🟢")));
router.use("/notification", routesNotification);
router.use("/message", routesMessage);
router.use("/friend", routesFriend);
router.use("/user", routesUser);
router.use("/chat", routesChat);

export default router;