"use client";
import NewTaskInput from "./NewTaskInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Modal = ({ showModal, addTask }) => {
  const handleAddTask = async (title, description) => {
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        const newTask = await res.json();
        addTask(newTask);
      } else {
        const error = await res.json();
        console.error("Erreur lors de l'ajout de la tâche :", error);
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
    showModal(false);
  };

  return (
    <div className="absolute top-0 left-0 flex h-screen w-screen bg-black/40">
      <div className="m-auto flex flex-col rounded-xl bg-white px-7 py-5">
        <button
          className="mb-2 ml-auto cursor-pointer p-2.5 transition-colors hover:text-(--secondary)"
          onClick={() => showModal(false)}
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>
        <NewTaskInput handleAddTask={handleAddTask} />
      </div>
    </div>
  );
};

export default Modal;
