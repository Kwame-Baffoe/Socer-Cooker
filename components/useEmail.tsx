import { useUser } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';

export const useUserEmail = () => {
  const { user } = useUser();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    setUserEmail(user?.primaryEmailAddressId ?? '');
  }, [user]);

  return userEmail;
};