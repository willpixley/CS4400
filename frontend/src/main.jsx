import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Login from './Login.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />  {/* Does nothing right now */}
		<Login /> {/* Adds login component page */}
	</StrictMode>
);
