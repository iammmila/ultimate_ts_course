import React, { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const data = await reminderService.getReminders();
    setReminders(data);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((item) => item.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([...reminders, newReminder]);
  };
  
  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
