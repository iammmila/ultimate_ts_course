import React, { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const data = await reminderService.getReminders();
    setReminders(data);
  };
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
