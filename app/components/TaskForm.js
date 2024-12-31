import React from "react"; // Add this import
export default function TaskForm({ onSubmit }) {
    const [name,setName] = React.useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(name);
      setName('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a new task"
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4">
          Add
        </button>
      </form>
    );
  }
  