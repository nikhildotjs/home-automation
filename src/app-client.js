import React from 'react';
import ReactDOM from 'react-dom';
import HomeAutoTool from './components/HomeAutoTool';

window.onload = () => {
  // Use jQuery AJAX to fetch data from API
    $.ajax({
      dataType: 'json',
      url: '/api/homestatus',
      success: (data) => {
        ReactDOM.render(<HomeAutoTool roomData={data.Rooms}/>, document.getElementById('main'));
      }
    });
};
