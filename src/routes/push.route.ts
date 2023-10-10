import { Router } from "express";

import { notifyController } from "../controllers/notify.controller";

const router = Router();

router.post("/push/", notifyController.push.bind(notifyController));

module.exports = router;
