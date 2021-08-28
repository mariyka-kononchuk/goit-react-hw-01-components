import PropTypes from 'prop-types';

export default function Profile({ avatar, tag, name, location, followers, views, likes }) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={tag} class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  folllowers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
