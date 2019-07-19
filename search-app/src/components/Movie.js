import React from 'react';

import { CTX } from './Store';

export default function Movie(){

  const [appState, dispatch] = React.useContext(CTX);

  React.useEffect(() => {

    const DATA_URL = `https://www.omdbapi.com/?s=${appState.keySearch}&apikey=4a3b711b`;
    fetch(DATA_URL)
    .then(res => res.json())
    .then(res => {
      dispatch({ type: 'FETCHED_DATA', movieList: res.Search });
    })

  })

  if(appState.movie){
    return(
      <div className="container">
        <div className="row">
        {
          appState.movie.map((item, index) => {
            return(
              <div key={index} className="col">
                <div className="card mb-3" style={{width: '18rem'}}>
                  <div style={{ maxHeight: '405px', overflow: 'hidden' }}><img className="card-img-top" src={item.Poster} alt="" /></div>
                  <div className="card-body">
                    <h5 className="card-title">{item.Title}</h5>
                    <p className="card-text">Year: {item.Year}</p>
                    <p className="card-text">Type: {item.Type}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
  return(
    <div>Not thing, you can search again!...</div>
  )

}