import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <section class="statistics">
      {/* checking existence of Title */}
      {/* {title && <h2 class="title">{title}</h2>} */}
      <ul class="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li class="item" key={id}>
            <span class="status"></span>
            <img class="avatar" src={avatar} alt="" width="48" />
            <p class="name">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
