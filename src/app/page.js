"use client";
import { useState, useEffect } from "react";
import Task from "@/components/Task";
import PlusButton from "@/components/PlusButton";
export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("/api/tasks");
      const data = await res.json();
      setTasks(data.tasks);
    };
    fetchTasks();
  }, []);

  const addTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };
  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const tasksList = tasks.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      title={task.title}
      description={task.description}
      completed={task.completed}
      removeTask={removeTask}
    />
  ));

  return (
    <main className="flex h-full flex-col p-5">
      <div className="m-auto flex">
        <h1 className="font-title">Todo list</h1>
        <PlusButton addTask={addTask} />
      </div>

      <div className="m-auto mt-7 min-w-full grow rounded-xl bg-white px-7 py-5 sm:w-xl sm:min-w-0">
        <ul className="h-full w-full space-y-3 overflow-y-auto">
          {tasks.length < 1 ? "Aucune tâche" : tasksList}
        </ul>
      </div>
    </main>
  );
}
