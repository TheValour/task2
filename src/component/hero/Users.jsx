import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Loader from './Loader';

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
    <div className='w-4/12 h-screen overflow-scroll no-scrollbar ml-2'>
      <h1 className='w-4/12  bg-gray-400 text-center py-3 text-xl font-bold fixed '>API Data</h1>
      <div className='mt-16'>
        {loading && <Loader/>}
        {error && <p className='text-red-400 font-xl'>Error: {error.message}</p>}

        {data && data.map((user) => <Card key={user.createdAt} user={user} />)}
      </div>
    </div>
  );
}
