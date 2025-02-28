"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Task = ({ id, title, description, completed, removeTask }) => {
  const [isComplete, setIsComplete] = useState(completed);
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        removeTask(id);
      } else {
        const error = await res.json();
        console.error("Erreur lors de la suppression de la tâche :", error);
      }
    } catch (error) {
      console.error("Erreur lors de la requête DELETE :", error);
    }
  };
  const handleCheckboxChange = async () => {
    const newStatus = !isComplete;
    setIsComplete(newStatus);

    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: newStatus }),
      });

      if (!res.ok) {
        const error = await res.json();
        setIsComplete(!newStatus);
      }
    } catch (error) {
      setIsComplete(!newStatus);
    }
  };

  return (
    <li className="flex w-full items-center">
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => handleCheckboxChange()}
        className="mr-2.5 w-4 border-(--text)"
      />
      <span className={`${isComplete ? "isComplete" : ""}`}>{title}</span>

      <button className="ml-auto cursor-pointer p-1.5 text-xs transition-colors hover:text-(--secondary)">
        <FontAwesomeIcon
          size="xl"
          icon={faTrash}
          onClick={() => handleDelete()}
        />
      </button>
    </li>
  );
};

export default Task;
