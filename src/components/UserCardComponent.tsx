import { useEffect, useState } from 'react';
import UserCard from './UserCard';

interface User {
  name: string;
  email: string;
}

const UserCardComponent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      console.log('fetching user data...');
      const randomNum = Math.floor(Math.random() * 10) + 1;
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/' + randomNum
        );
        if (!response.ok) {
          throw new Error('Fail to fetch user data!');
        }
        const data: User = await response.json();
        console.log(data);
        setUser(data);
      } catch (err: any) {
        setError(err.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);
  const handleSendMessage = () => {
    console.log('Message sent to ' + user?.name);
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  return user ? (
    <UserCard user={user} onMessageClick={handleSendMessage} />
  ) : (
    <p>no user data available</p>
  );
};
export default UserCardComponent;
