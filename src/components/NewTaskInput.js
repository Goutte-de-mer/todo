"use client";
import { useState } from "react";
const NewTaskInput = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="m-auto flex min-w-full flex-col space-y-8 rounded-md bg-white px-5 py-2 sm:w-xl sm:min-w-0">
      <input
        className="w-full border-b-[1.5px] border-b-[#e4e4e4] focus-visible:outline-0"
        type="text"
        name="task"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border-b-[1.5px] border-b-[#e4e4e4] focus-visible:outline-0"
        name="description"
        id="description"
        rows="4"
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="mx-auto cursor-pointer rounded-md bg-(--secondary) px-4 py-3 font-semibold text-white transition hover:scale-90"
        onClick={() => handleAddTask(title, description)}
      >
        Ajouter
      </button>
    </div>
  );
};

export default NewTaskInput;
