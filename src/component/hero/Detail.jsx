import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DetailCard from './DetailCard';
import { useSharedState } from '../context/UserContext';

export default function Detail() {
  const { currId } = useSharedState();
  console.log("DetailPage", currId)

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
        setUser(null)
        setError(null)
      try {
        const response = await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${currId}`);
        setUser(response.data);
        setError(null)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currId]);

  return (
    <div className="bg-white p-6 m-4 rounded-md shadow-md w-6/12">
        <h2 className='bg-gray-100 p-2 mb-3 text-center'>User Detail</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {user && <DetailCard user={user}/> }
    </div>
  );
}
