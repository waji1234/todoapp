import { signOut, useSession } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between">
      <h1>Todo App</h1>
      {session && (
        <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded">
          Sign Out
        </button>
      )}
    </header>
  );
}
