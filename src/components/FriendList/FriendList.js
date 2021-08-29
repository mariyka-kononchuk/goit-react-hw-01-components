import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <section className="statistics">
      {/* checking existence of Title */}
      {/* {title && <h2 className="title">{title}</h2>} */}
      <ul className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className="item" key={id}>
            <span className="status"></span>
            <img className="avatar" src={avatar} alt="" width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </section>
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
