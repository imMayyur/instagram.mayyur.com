import { signOut, useSession } from 'next-auth/react';

function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between ml-10 mt-14 ">
      <img
        src={session?.user?.image}
        alt=""
        className="border rounded-full p-[2px] w-16 h-16"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className="text-sm font-semibold text-blue-400">
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
