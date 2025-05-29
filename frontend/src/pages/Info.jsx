import { useEffect, useState } from 'react';
import axios from 'axios';

function Info() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/ping')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching API:', error);
      });
  }, []);

  return (
    <div>
      <h1>Info Page</h1>
      <p>Server says: {message}</p>
    </div>
  );
}

export default Info;
