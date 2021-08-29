import PropTypes from 'prop-types';
import './Profile.css';

export default function Profile({ avatar, tag, name, location, followers, views, likes }) {
  return (
    <div className="Profile">
      <div className="Profile__description">
        <img src={avatar} alt={tag} className="Profile__avatar" />
        <p className="Profile__name">{name}</p>
        <p className="Profile__tag">{tag}</p>
        <p className="Profile__location">{location}</p>
      </div>

      <ul className="Profile__stats">
        <li className="Profile__stats--item">
          <span className="Profile__stats--label">Followers</span>
          <span className="Profile__stats--quantity">{followers}</span>
        </li>
        <li className="Profile__stats--item">
          <span className="Profile__stats--label">Views</span>
          <span className="Profile__stats--quantity">{views}</span>
        </li>
        <li className="Profile__stats--item">
          <span className="Profile__stats--label">Likes</span>
          <span className="Profile__stats--quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
