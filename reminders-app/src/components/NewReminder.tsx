import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}
const NewReminder = ({ onAddReminder }: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(title);
    if (!title) return;
    onAddReminder(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn my-3 btn-primary rounded-pill">
        Add reminder
      </button>
    </form>
  );
};

export default NewReminder;
