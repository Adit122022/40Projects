import React, { useState } from 'react';

const ADDCard = () => {
  // State to manage the list of friends (initially empty)
  const [friends, setFriends] = useState([]);
  
  // Sample user data
  const users = [
    {
      id: 1,
      name: "LADKI KA NAME",
      username: "Not_Your_Type",
      email: "LAdki@example.com",
      imageUrl: "https://i.pinimg.com/736x/98/60/12/986012d23f227afee8a86580c7206197.jpg"
    },
    {
      id: 2,
      name: "TOJI",
      username: "TOJI",
      email: "jane@example.com",
      imageUrl: "https://i.pinimg.com/736x/7f/42/c9/7f42c9e5e81de42e63ea75531309b6de.jpg"
    }
  ];

  // Function to toggle adding/removing a user as a friend
  const handleFriendToggle = (user) => {
    if (friends.some(friend => friend.id === user.id)) {
      // If the user is already a friend, remove them from the list
      setFriends(friends.filter(friend => friend.id !== user.id));
    } else {
      // If the user is not a friend, add them to the list
      setFriends([...friends, user]);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {users.map((user) => (
        <div key={user.id} className="flex flex-col items-center p-4 border rounded-lg">
          {/* Display User Image */}
          <img src={user.imageUrl} alt={user.name} className="w-44 h-44 object-cover object-top  rounded-full mb-4" />

          {/* Display User Information */}
          <h1 className="text-xl font-semibold">{user.username}</h1>
          <h2 className="text-lg">{user.name}</h2>
          <p className='text-gray-400'>{user.email}</p>

          {/* Add/Remove Friend Button */}
          <button
  onClick={() => handleFriendToggle(user)}
  className={`mt-4 px-6 py-2 rounded-md text-white font-medium shadow-sm transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none 
    ${friends.some(friend => friend.id === user.id) 
      ? 'bg-rose-500 hover:bg-rose-600' 
      : 'bg-green-500 hover:bg-green-600'
    }`}
>
  {friends.some(friend => friend.id === user.id) ? 'Delete Friend' : 'Add Friend'}
</button>



        </div>
      ))}
    </div>
  );
};

export default ADDCard;
