import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

export default function Users() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setData(null)
        setLoading(true)
        setError(null)
      try {
        const response = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-4/12 h-screen overflow-scroll no-scrollbar'>
      <h1 className='w-4/12  bg-gray-400 flex items-center justify-center p-3 text-xl font-bold fixed z-3'>API Data</h1>
      <div className='mt-16'>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

        {data && data.map((user) => <Card key={user.createdAt} user={user} />)}
      </div>
    </div>
  );
}
