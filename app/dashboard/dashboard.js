"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [tasks, setTasks] = useState([]);

  // Redirect to login page if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      async function fetchTasks() {
        const response = await fetch("/api/tasks");
        const data = await response.json();
        setTasks(data);
      }
      fetchTasks();
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const addTask = async (name) => {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const newTask = await response.json();
    setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    await fetch("/api/tasks", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    window.location.href = `/edit/${id}`;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <TaskForm onSubmit={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      </main>
    </div>
  );
}
