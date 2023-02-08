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
        JWT_ACCESS_SECRET=77
        JWT_REFRESH_SECRET=7777

        ```
* run migrations
    ```
    npm run migrate:up 
    ```
* run server 
    ```
    npm run build && npm start
    ```
