import { PlusIcon } from '@heroicons/react/outline';

function Story({ img, username, owner }) {
  return (
    <div>
      <div className="relative">
        <img
          src={img}
          alt=""
          className="rounded-full h-14 w-14 p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        />
        {owner && (
          <div className="absolute bottom-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-green-600 rounded-full cursor-pointer -right-1 animate-pulse">
            <PlusIcon className="w-4" />
          </div>
        )}
      </div>
      <p
        className={`text-xs text-center truncate w-14 ${
          owner && 'text-gray-400'
        }`}
      >
        {username}
      </p>
    </div>
  );
}

export default Story;
