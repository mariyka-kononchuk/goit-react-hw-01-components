import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friends => (
        <li key={friends.id}>
          <FriendListItem friends={friends} />
        </li>
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};
