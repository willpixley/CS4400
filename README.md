# CS4440

## Project structure

### Backend

- Node.js backend connected to a MySQL database located in the `/backend` folder

#### Connect to MySQL

1. Navigate to the `/backend` folder.

2. In the query window copy and paste the following script, feel free to modify the names if needed.

   ```sql
   CREATE DATABASE cs4400_db;
   -- recommended: use your own password
   CREATE USER 'db_user'@'localhost' IDENTIFIED BY 'my_password';
   GRANT ALL PRIVILEGES ON cs4400_db.* TO 'db_user'@'localhost';
   FLUSH PRIVILEGES;

   USE cs4400_db;
   CREATE TABLE test_table (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255),
       age INT
   );

   -- this is just initial test data to ensure setup is successful
   INSERT INTO test_table (name, age) VALUES ('John Doe', 30), ('Jane Smith', 25);
   ```

3. In the /backend/ directory create a new enviornment file `.env` and paste in these contents, or replace the values with your own.

   ```js
   DB_HOST = localhost;
   DB_USER = db_user;
   DB_PASSWORD = my_password;
   DB_NAME = cs4400_db;
   ```

4. Run `npm run start` and check to make sure the server runs and tables are created

Notes:

- All tables are created and seeded fresh each time the server is started
- Tables are created in the `config/createTables.js` file. There is an example table already being created in there.

### Frontend

- Vite with React frontend located in the `/frontend` folder

### Login Tutorial

1. Start Frontend and Backend.

- Login screen should be on the localhost webpage

2. Create a users table your cs4400_db database in your MySql server if it isn't already there

   ```
   CREATE TABLE users (
       username VARCHAR(255) PRIMARY KEY,
       password VARCHAR(255),
       userClass VARCHAR(255)
   );

   -- Sample data
   INSERT INTO users (username, password, userClass) VALUES
       ('user1', 'password', 'faculty'),
       ('user2', 'password', 'faculty');
   ```

3. Navigate to your browser and the login screen and press F12 to access the console, which is on the top bar next to elements

4. Enter the correct login information from the users table and press enter

5. Click the data that just popped up in the console and click data in the drop down

- You'll see the user data was valid so it was received

- An invalid login will say "Login Invalid"
