import React, { useState } from "react"; // Import React and the useState hook to manage the state of usernames and passwords
import Axios from "axios"; // Import Axios for making HTTP requests

function Login() {
  // useState hook is used to create state variables for the username and password inputs
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");

  // Function that handles login when the button is clicked
  const login = () => {
    // Sending a POST request to the backend to authenticate the user
    Axios.post('http://localhost:8000/login', {
      username: username, // Passing the username entered by the user
      password: password, // Passing the password entered by the user
    }).then((response) => {   // When we get a response from the backend (success or failure)
      console.log(response);  // Log the response from the backend (e.g., user data or error)
    }).catch((error) => {
      // Catch and log any errors that might occur during the request
      console.error("Error during login:", error);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-400">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black">User Login</h1>
        </div>
        
        <div className="space-y-4">
          {/* Input for Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-black">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required  // This input is required to be filled out before submission
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-black"
              placeholder="Username"  // Placeholder text inside the input field
              // Update the username state whenever the user types in the input
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          {/* Input for Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"  // This field is for password (characters are hidden)
              required  // This input is required to be filled out before submission
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-black"
              placeholder="Password"  // Placeholder text inside the input field
              // Update the password state whenever the user types in the input
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button to trigger the login function */}
          <div className="pt-2">
            <button
              onClick={login}  // When clicked, the login function is called
              className="w-full px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Sign in  {/* Button label */}
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Login;  // Export the Login component to use it in other parts of the app
