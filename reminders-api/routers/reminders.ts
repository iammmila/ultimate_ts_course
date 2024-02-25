import { Router } from "express";
import CreateReminderDTO from "../dtos/create-reminder";
import Reminder from "../models/reminders";

const router = Router();
const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDTO;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminder);
});

export default router;
