import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter'


const element = <h3>Hello World!</h3>;

ReactDOM.render(<Counter />, document.getElementById('main-container'));