import { friendshipController }  from "./controller";
import { Router } from "express";

const router = Router();

router.get("/add-friend", friendshipController.addFriend);
router.post("/get-friend", friendshipController.getFriends);
router.post("/remove-friend", friendshipController.removeFriend);

export default router;