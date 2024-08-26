## About
This is a calendar app that enables the user to gather all the events they'd like to attend in one database. This is so they can see all the available options on what to do each day when they click the date on the calendar. 

The project was initially focusing on kid and carer-friendly events, but it really can be used for any kind of event. 

## Setup
### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).
- Run `npm i luxon`. This will install Luxon, which is used in the "calendar" component on the client side.

### Database Prep

Create `.env` file in project directory and add

```
DB_NAME=events
DB_PASS=YOUR_PASSWORD
```

(replace `YOUR_PASSWORD` with your actual password)

Alternatively, you can rename the provided `.env.example` file to `.env`.

Access the mySQL CLI:

 - MAC:  Type `mysql -u root -p` into your terminal, enter your password when prompted.
 - WINDOWS: Search for mySQL in windows search and open mySQL 8.0 Command Line Client.  Enter you password when prompted.

In the MySQL CLI, type `create database todos;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Run `npm run migrate` in your **TERMINAL**, in the **project** folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 4000
- `cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.
- Client is configured so all API calls will be proxied to port 4000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:5173`
- You can test your API in `http://localhost:4000/api`

## Future Features
The user is able to:
- Edit the details of each event
- Have the event displayed by a range of dates, e.g. let's say a festival is on throughout the month of August 2024. When the user inputs the data, it should appear on every day in August in the calendar when the date is clicked on.
- See all the events of the day as pins in a map
- Select the events they want to attend in that day and plan their journey

## Technologies Used

- Express.js
- MySQL
- Postman
- Node.js
- Luxon
- Javascript
- React
- React Router
- HTML 5
- CSS
- Sass
- Bootstrap
- Tailwind

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._