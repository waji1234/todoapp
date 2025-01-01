import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "GET") {
    // Fetch tasks
    try {
      const tasks = await prisma.task.findMany({
        where: { userEmail: session.user.email },
      });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch tasks" });
    }
  } else if (req.method === "POST") {
    // Add a task
    try {
      const { name } = req.body;
      const newTask = await prisma.task.create({
        data: {
          name,
          userEmail: session.user.email,
        },
      });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: "Failed to create task" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
