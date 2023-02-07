* install dependencies 
    ```
    npm i
    ```
* create `.env` file
    * example
        ```yaml
        DB_USER=your-dbuser
        DB_NAME=your-dbname
        DB_PASS=password
        ```
* run migrations
    ```
    npm run migrate:up 
    ```
* run server 
    ```
    npm run build && npm start
    ```
