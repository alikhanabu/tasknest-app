import { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  return (
    <div>
      <h2>User Form</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="date"
        value={birth}
        onChange={(e) => setBirth(e.target.value)}
      />

      <p>Gender</p>

      <input
        type="radio"
        name="gender"
        value="Male"
        onChange={(e) => setGender(e.target.value)}
      /> Male

      <input
        type="radio"
        name="gender"
        value="Female"
        onChange={(e) => setGender(e.target.value)}
      /> Female

      <br />

      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select country</option>
        <option>Kazakhstan</option>
        <option>USA</option>
        <option>Germany</option>
        <option>Japan</option>
      </select>

      <br />

      <input
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <hr />

      <h3>Result</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Birth: {birth}</p>
      <p>Gender: {gender}</p>
      <p>Country: {country}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default UserForm;
