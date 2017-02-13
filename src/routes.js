import Express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import homeAutoData from '../data/service-response.json';

export default {
  configure (app) {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    // Routing for static assets
    app.use(Express.static(path.resolve(__dirname, '../public')));

    // Routing for the view
    app.get('/ha-dashboard', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../views/index.html'));
    });

    // Redirect for root
    app.get('/', (req, res) => {
      res.redirect('/ha-dashboard');
    });

    // Routing for static json 'api'
    app.get('/api/homestatus', (req, res) => {
      res.json(homeAutoData);
    });

    // Routing for endpoint to update room temperature
    app.patch('/api/temperature', (req, res) => {
      console.log(req.body);
      res.status(200).send(`Temperature updated to ${req.body.temperature}`);
    });
  }
}