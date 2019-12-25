import React from 'react';
import './App.css';

import CheckBox from "./CheckBox";

function App() {
    const [user, setUser] = React.useState({});
    const [favorites, setFavorites] = React.useState([
        { id: 1, value: "banana", isChecked: false },
        { id: 2, value: "apple", isChecked: false },
        { id: 3, value: "mango", isChecked: false },
        { id: 4, value: "grap", isChecked: false }
    ]);

    const hanldeChange = (e) => {
        const target = e.target;
        const { name, value, type, checked } = target;
        let newFavorites = favorites;
        const yourFavorites = [];

        newFavorites.forEach(item => item.value === value ? item.isChecked = checked : null);

        newFavorites.forEach(item => item.isChecked && yourFavorites.push(item.value));

        setFavorites(newFavorites);
        setUser({ ...user, [name]: type === "checkbox" ? yourFavorites : value });
    };

    const hanldSubmit = (e) => {
        e.preventDefault();

				console.log('favorites', favorites);
        console.log('submited', user)
    };

    return (
        <div className="App">
      <form onSubmit={hanldSubmit}>
      	<table>
	      	<tbody>
	      		<tr>
		      		<td>
		      			<label>
					      	Username:
					      	<input
					      		type="text"
					      		name="userName"
					      		value={user.userName || ""}
					      		onChange={hanldeChange}
					      		/>
					      </label>
		      		</td>
		      	</tr>
		      	<tr>
		      		<td>
		      			<label>
					      	Password:
					      	<input
					      		type="password"
					      		name="password"
					      		value={user.password || ""}
					      		onChange={hanldeChange}
					      		/>
					      </label>
		      		</td>
		      	</tr>
		      	<tr>
		      		<td>
		      			<label>
					      	Email:
					      	<input
					      		type="text"
					      		name="email"
					      		value={user.email || ""}
					      		onChange={hanldeChange}
					      		/>
					      </label>
		      		</td>
		      	</tr>
		      	<tr>
		      		<td>
					      <fieldset>
					      	<legend>Favorites:</legend>
					      	{
					      		favorites.map((favorite, index) => (
					      			<CheckBox key={index} hanldeChange={hanldeChange} { ...favorite } />
					      		))
					      	}
					      </fieldset>
		      		</td>
		      	</tr>
		      	<tr>
		      		<td>
				      	<input style={{ marginTop: "2rem" }} type="submit" value="Submit" />
		      		</td>
		      	</tr>
	      	</tbody>
	      </table>
      </form>

      {
      	user.favorites
      	? (
      		<div>Your favorites: {user.favorites.join(" - ")}</div>
      	) : null
      }
    </div>
    );
}

export default App;