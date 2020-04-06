import React, { useState } from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {
  const [ name, setName ] = useState(String);
  const [ email, setEmail ] = useState(String);
  const [ image, setImage ] = useState(String);

  const responseGoogle = (response) => {
    try {
      const { profileObj } = response;

      setName(profileObj.name);
      setEmail(profileObj.email);
      setImage(profileObj.imageUrl);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <h1>Google login</h1>
      <h3>Infomation:</h3>
      <p>Name: { name }</p>
      <p>Email: { email }</p>
      <p>Photo: <img src={ `${image}` } /></p>
      <GoogleLogin
        clientId="386091162882-q89lr91sr23qlcnmuqdq4e89mvagpg1q.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin
'}
      />
    </div>
  );
}

export default App;
