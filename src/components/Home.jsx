import React from 'react';

const cardStyle = {
  maxWidth: '400px',
  margin: '120px auto',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};

export default function Home() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) return <h2 style={{textAlign:'center', marginTop:'100px'}}>Not logged in</h2>;

  const namePart = user.fname.slice(0, 2).toLowerCase();
  const dobPart = user.dob.replace(/-/g, '');

  return (
    <div style={cardStyle}>
      <h2>WELCOME {namePart}{dobPart}</h2>
    </div>
  );
}
