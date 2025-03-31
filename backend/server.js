import app from './app.js';
import createTables from './config/createTables.js';

async function startServer() {
	await createTables();
	app.listen(8000, () => {
		console.log(`Server is running on port 8000`);
	});
}

startServer();
