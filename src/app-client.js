import React from 'react';
import ReactDOM from 'react-dom';
import HomeAutoTool from './components/HomeAutoTool';
import homeAutoData from '../data/service-response.json';

window.onload = () => {
  // Use jQuery AJAX to fetch data from API
    $.ajax({
      dataType: 'json',
      url: '/api/homestatus',
      success: (data) => {
        ReactDOM.render(<HomeAutoTool roomData={data.Rooms}/>, document.getElementById('main'));
      },
      error: () => {
        // Allows application to run from static html file
        ReactDOM.render(<HomeAutoTool roomData={homeAutoData.Rooms}/>, document.getElementById('main'));
      }
    });
};
