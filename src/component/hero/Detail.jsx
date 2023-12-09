import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DetailCard from './DetailCard';
import { useSharedState } from '../context/UserContext';
import Loader from '../loader/Loader';
import BackButton from './BackButton';

export default function Detail() {
  const { currId, show, setShowScreen } = useSharedState();

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
    <div id={`${show===1?"show":"notShow"}`} className="bg-white p-6 m-4 rounded-md shadow-md w-7/12 flex items-center flex-col ml-3 relative">
        <h2 className='bg-gray-100 p-2 mb-3 text-center w-11/12 text-xl font-bold'>User Detail</h2>
        
        <span id='backButton'  className='absolute top-7 left-12 hidden' onClick={() => setShowScreen(2)}> <BackButton/> </span>

        <div className='w-12/12 flex items-center justify-center'>
            {loading && <Loader/>}
            {error && <p className='text-red-400 text-2xl'>Error: {error}</p>}
        </div>

      {user && <DetailCard user={user}/> }
    </div>
  );
}


