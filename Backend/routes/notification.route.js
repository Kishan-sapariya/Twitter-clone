import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { deleteNotifications, getAllNotifications } from "../controller/notification.controller.js";

const router=express.Router();

router.get("/",protectRoute,getAllNotifications);
router.delete("/",protectRoute,deleteNotifications);

export default router;