import React from 'react';

import { CTX } from '../Store';

export default function Navbar(){

  const [keyState, setKeyState] = React.useState("");
  const [appState, dispatch] = React.useContext(CTX);

  const onChangeSearch = (e) => {

    setKeyState(e.target.value);

  }

  const onSubmitSearch = e => {

    e.preventDefault();

    dispatch({ type: 'CHANGE_KEY_SEARCH', keySearch: keyState });

    const DATA_URL = `https://www.omdbapi.com/?s=${appState.keySearch}&apikey=4a3b711b`;
    fetch(DATA_URL)
    .then(res => res.json())
    .then(res => {
      dispatch({ type: 'SEARCH', payload: res.Search });
    })

  }

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <a className="navbar-brand" href="#0">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#0">Link</a>
          </li>
        </ul>
        <form onSubmit={onSubmitSearch} className="form-inline my-2 my-lg-0">
          {/* search */}
          <input 
            className="form-control mr-sm-2" 
            type="text"
            value={keyState}
            onChange={onChangeSearch}
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          {/* endsearch */}
        </form>
      </div>
    </nav>
  )

}