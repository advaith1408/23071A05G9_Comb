import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cardStyle = {
  maxWidth: '400px',
  margin: '80px auto',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  fontFamily: 'Arial, sans-serif',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
  boxSizing: 'border-box',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  fontSize: '18px',
  cursor: 'pointer',
};

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    dob: '',
    uname: '',
    pass: '',
    cpass: '',
    city: '',
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.pass !== form.cpass) {
      setError('Passwords do not match!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find(u => u.uname === form.uname);
    if (userExists) {
      setError('User already registered with this username.');
      return;
    }

    users.push(form);
    localStorage.setItem('users', JSON.stringify(users));
    setError('');
    alert('Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
      <form onSubmit={handleSubmit}>
        <input id="fname" placeholder="First Name" value={form.fname} onChange={handleChange} required style={inputStyle} />
        <input id="lname" placeholder="Last Name" value={form.lname} onChange={handleChange} required style={inputStyle} />
        <input id="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={inputStyle} />
        <input id="dob" type="date" placeholder="DOB" value={form.dob} onChange={handleChange} required style={inputStyle} />
        <input id="uname" placeholder="Username" value={form.uname} onChange={handleChange} required style={inputStyle} />
        <input id="pass" type="password" placeholder="Password" value={form.pass} onChange={handleChange} required style={inputStyle} />
        <input id="cpass" type="password" placeholder="Confirm Password" value={form.cpass} onChange={handleChange} required style={inputStyle} />
        <input id="city" placeholder="City" value={form.city} onChange={handleChange} required style={inputStyle} />
        <button type="submit" style={buttonStyle}>Register</button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '15px', textAlign: 'center' }}>{error}</p>}
    </div>
  );
}

export default Register;
