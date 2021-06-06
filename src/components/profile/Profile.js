import React from 'react';
import PropTypes from "prop-types";
// import user from './user.json';
import defaultImage from "../../components/default.jpg";
import profileStyles from '../profile/Profile.module.css';
import '../../index.css';



const Profile = ({ name, tag, location, avatar, stats}) => (
	<div className={profileStyles.profile}>
  <div className={profileStyles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={profileStyles.avatar}
    />
    <p className={profileStyles.name}>{name}</p>
    <p className={profileStyles.tag}>{tag}</p>
    <p className={profileStyles.location}>{location}</p>
  </div>

  <ul className={profileStyles.stats}>
    <li className={profileStyles.item}>
      <span className={profileStyles.label}>Followers</span>
      <span className={profileStyles.quantity}>{stats.followers}</span>
    </li>
    <li className={profileStyles.item}>
      <span className={profileStyles.label}>Views</span>
      <span className={profileStyles.quantity}>{stats.views}</span>
    </li>
    <li className={profileStyles.item}>
      <span className={profileStyles.label}>Likes</span>
      <span className={profileStyles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
)

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};

export default Profile;