import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Login-Logik implementieren
    // Zum Beispiel: Aufruf einer API, die einen Benutzer einloggt
    console.log('Login-Daten:', formData);
  };

  return (
  <main>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameOrEmail">Username or E-Mail:</label>
        <input
          type="text"
          id="usernameOrEmail"
          name="usernameOrEmail"
          value={formData.usernameOrEmail}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className="btn" type="submit">Login</button>
      </form>
    </div>
    </main>
  );
};

export default Login;