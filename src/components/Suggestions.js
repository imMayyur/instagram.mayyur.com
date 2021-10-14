import faker from 'faker';
import { useEffect, useState } from 'react';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <img
          src="../assets/img/mayur.jpg"
          alt=""
          className="w-10 h-10 rounded-full border p-[2px]"
        />
        <div className="flex-1 ml-4">
          <h2 className="text-sm font-semibold">im.mayyur</h2>
          <h3 className="text-xs text-gray-400">
            This is my real Instagram Profile
          </h3>
        </div>
        <a
          className="text-xs font-bold text-blue-400"
          href="https://instagram.com/im.mayyur"
          target="_blank"
        >
          Follow
        </a>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            alt=""
            className="w-10 h-10 rounded-full border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Wrks at {profile.company.name}
            </h3>
          </div>
          <button className="text-xs font-bold text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
