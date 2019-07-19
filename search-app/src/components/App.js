import React from "react";

import Movie from './Movie';
import Store from "./Store";
import Navbar from './commons/navbar';

import './bootstrap.min.css';

export default function App() {
  return(
    <Store>
		<h3 style={{ width: '100%', textAlign: 'center' }}>App search use react hooks and react contextAPI</h3>
		<Navbar />
		<Movie />
    </Store>
  );
}
