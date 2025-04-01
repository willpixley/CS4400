# CS4440

## Project structure

### Backend

-   Node.js backend connected to a MySQL database located in the `/backend` folder

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

-   All tables are created and seeded fresh each time the server is started
-   Tables are created in the `config/createTables.js` file. There is an example table already being created in there.

### Frontend

-   Vite with React frontend located in the `/frontend` folder
