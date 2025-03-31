import createConnection from './db.js';

const createTables = async () => {
	const db = await createConnection();

	try {
		await db.query(`
            DROP TABLE IF EXISTS test;
        `);

		await db.query(`
            CREATE TABLE IF NOT EXISTS test (
                id INT AUTO_INCREMENT PRIMARY KEY,
                comment VARCHAR(255)
            );
        `);
		console.log('Tables created or already exist.');
	} catch (error) {
		console.error('Error creating tables:', error);
	} finally {
		await db.end();
	}
};

export default createTables;
