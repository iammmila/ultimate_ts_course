import { Router } from "express";
import CreateReminderDTO from "../dtos/create-reminder";

const router = Router();

router.get("/", (req, res) => {
  res.send("List Of Reminders");
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDTO;
  res.json(title);
});

export default router;
