export default function TaskList({ tasks, onDelete, onEdit }) {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2 border">
            <span>{task.name}</span>
            <div>
              <button onClick={() => onEdit(task.id)} className="text-blue-500 mr-2">
                Edit
              </button>
              <button onClick={() => onDelete(task.id)} className="text-red-500">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  