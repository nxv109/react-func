import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './styles/main.scss';

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
