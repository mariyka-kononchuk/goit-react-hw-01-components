import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={s.item} key={id}>
          <span className={s.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
          <img className={s.avatar} src={avatar} alt="" width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
