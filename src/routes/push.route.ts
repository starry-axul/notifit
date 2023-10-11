import { Router } from "express";

import { notifyController } from "../controllers";

const router = Router();

router.post("/push/", notifyController.push.bind(notifyController));

export default router;
