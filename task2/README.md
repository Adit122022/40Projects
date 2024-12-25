# **ADDCard React Component**

A React component that displays user cards with the option to toggle between adding and removing users as friends. The component includes user details (name, username, email, and an image) and a button to add or delete friends. The button dynamically changes its text and color based on the user's friend status.

## **Features**
- Display user information: Name, Username, Email, and Profile Picture.
- Toggle between adding and removing a user from the friend list.
- The button label and background color change depending on whether the user is a friend or not.
- Utilizes **Tailwind CSS** for a responsive, modern design.

## **Technologies Used**
- **React** - JavaScript library for building the user interface.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **JavaScript (ES6+)** - Modern JavaScript features.

## **Setup Instructions**

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/addcard-react.git
cd addcard-react

### 2. Install Dependencies

Make sure you have `npm` or `yarn` installed. Then, install the required dependencies:

```bash
npm install
# or
yarn install
```

### 3. Run the Application

To start the development server, use the following command:

```bash
npm start
# or
yarn start
```

This will run the app at `http://localhost:3000`.

## **Usage**

- The app renders a list of user cards.
- Each card displays the user's `username`, `name`, `email`, and their `profile image`.
- The button below each user card allows you to toggle between adding and deleting the user as a friend.
  - **Add Friend** button: Green background when the user is not a friend.
  - **Delete Friend** button: Blue background when the user is a friend.

## **File Structure**

```
/src
  /components
    ADDCard.js       # Main React component for displaying user cards
  App.js             # Main app component that renders ADDCard
  index.js           # Entry point of the React application
  tailwind.config.js # Tailwind CSS configuration
  /public
    index.html       # HTML template for the application
```

## **Example Code**

Below is the core functionality of the `ADDCard.js` component:

```jsx
import React, { useState } from 'react';

const ADDCard = () => {
  const [friends, setFriends] = useState([]);

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

  const handleFriendToggle = (user) => {
    if (friends.some(friend => friend.id === user.id)) {
      setFriends(friends.filter(friend => friend.id !== user.id));
    } else {
      setFriends([...friends, user]);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {users.map((user) => (
        <div key={user.id} className="flex flex-col items-center p-4 border rounded-lg">
          <img src={user.imageUrl} alt={user.name} className="w-44 h-44 object-cover object-top rounded-full mb-4" />
          <h1 className="text-xl font-semibold">{user.username}</h1>
          <h2 className="text-lg">{user.name}</h2>
          <p>{user.email}</p>

          <button
            onClick={() => handleFriendToggle(user)}
            className={`mt-4 px-6 py-3 rounded-md text-white font-medium shadow-sm transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none
              ${friends.some(friend => friend.id === user.id) 
                ? 'bg-blue-500 hover:bg-blue-600' 
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
```

## **Contributions**

Feel free to fork the repository and submit a pull request to contribute. Some ideas for improvement:
- Add more user information (phone number, address, etc.).
- Store the friend list in local storage or a backend service.
- Implement a search functionality to filter users.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---