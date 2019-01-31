import React from 'react';
import ReactDOM from 'react-dom';
import Myapp from './App';
import Weather from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Myapp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
