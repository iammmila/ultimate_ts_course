import React, { useState } from "react";

const NewReminder = (): JSX.Element => {
  const [title, setTitle] = useState("");
  return (
    <form>
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
