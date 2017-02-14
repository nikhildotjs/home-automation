# home-automation
A simple client side React.js application for simulating a home automation control tool. jQuery is used to perform AJAX requests. The application can be run in two ways: with a Node/Express server or from a static HTML file.

This project uses Express.js when run with the server side component and runs on node 6 (I'm currently running it on 6.9.0) and npm 3.


## To run the project in server mode:
1. Run 'npm install'.
2. Run 'npm start'.
3. Open up localhost:3000 in a browser.

When the project is run is this mode you will see successful logs in both the node.js and your browser console.


## To run the project in static mode
Go to `public` and open `index.html` in a browser.

When the project is run in this mode you will see error logs in your browser console indicating that the application cannot make any successful AJAX requests.
