import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../app/components/Header';

export default function EditTask() {
  const router = useRouter();
  const { taskId } = router.query;
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    async function fetchTask() {
      const response = await fetch(`/api/tasks/${taskId}`);
      const task = await response.json();
      setTaskName(task.name);
    }
    if (taskId) fetchTask();
  }, [taskId]);

  const updateTask = async () => {
    await fetch(`/api/tasks`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: taskId, updatedName: taskName }),
    });
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button onClick={updateTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Update
        </button>
      </main>
    </div>
  );
}
