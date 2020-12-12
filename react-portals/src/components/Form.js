import React, { useState, useEffect } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    favorites: [],
    gender: 'Male'
  });

  const [fakeData] = useState({
    favorites: [
      {
        value: 'footbal',
        name: 'Footbal',
        isChecked: true
      },
      {
        value: 'swim',
        name: 'Swim',
      },
    ],
  });

  useEffect(() => {
    let favoritesChecked = fakeData.favorites.filter(v => v.isChecked === true);

    setFormData(() => ({ ...formData, favorites: favoritesChecked }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleChangeFavorites = (e, id) => {
    const favorites = formData.favorites;
    const isExist = favorites.some(v => v.name === e.target.name);

    fakeData.favorites.forEach(v => {
      if (e.target.name === v.name) {
        v.isChecked = !v.isChecked;
      }
    });

    if (isExist) {
      const newFavorites = favorites.filter(v => v.name !== e.target.name);
      setFormData({ ...formData, favorites: newFavorites, })
    } else {
      favorites.push({
        value: e.target.value,
        name: e.target.name,
      });
      setFormData({ ...formData, favorites })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <div>
      <h1>Form page</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>First Name:</label>
          <input type="text" name='firstName' onChange={handleChange} value={formData.firstName} />
        </div>
        <div className='form-group'>
          <label>Last Name:</label>
          <input type="text" name='lastName' onChange={handleChange} value={formData.lastName} />
        </div>
        <div className='form-group'>
          <label>Favorites:</label>
          <div className='favorites-box'>
            {
              fakeData.favorites.map((v, index) => (
                <span key={index}>
                  <input type="checkbox" name={v.name} onChange={(e) => handleChangeFavorites(e, index)} value={v.value} checked={v.isChecked || false} />
                  <span>{v.name}</span>
                </span>
              ))
            }
          </div>
        </div>
        <div className="form-group">
          <label>Girl friend:</label>
          <input type="radio" name='girlFriend' onChange={handleChange} value='yes' />
          <span>Yes</span>
          <input type="radio" name='girlFriend' onChange={handleChange} value='no' />
          <span>No</span>
        </div>
        <div className="form-group">
          <label>Genders:</label>
          <select name="gender" onChange={handleChange}>
            <option defaultValue="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
          </svg>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form;