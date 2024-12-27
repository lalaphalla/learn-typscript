interface User {
  name: string;
  email: string;
}
interface UserCardProps {
  user: User;
  onMessageClick: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onMessageClick }) => (
  <div className="user-card">
    <h2>{user.name}</h2>
    <p>{user.email}</p>
    <button onClick={onMessageClick}>Send Message</button>
  </div>
);

export default UserCard;
