import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const { name } = req.body;
    const newTask = await prisma.task.create({ data: { name } });
    res.status(201).json(newTask);
  } else if (req.method === 'PUT') {
    const { id, updatedName } = req.body;
    const updatedTask = await prisma.task.update({
      where: { id },
      data: { name: updatedName },
    });
    res.status(200).json(updatedTask);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.task.delete({ where: { id } });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
