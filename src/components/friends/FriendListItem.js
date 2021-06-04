import React from 'react';
import PropTypes from "prop-types";
import '../../index.css';
import defaultImage from "../../components/default.jpg";

const FriendListItem = (({ avatar, name, isOnline, id }) => (
	
	<li class="item" key={id}>
		<span class="status">{isOnline}</span>
  		<img class="avatar" src={avatar} alt={name} width="48" />
		<p class="name">{name}</p>
	</li>
));

FriendListItem.defaultProps = {
	avatar: defaultImage,
};

FriendListItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired

  
};

export default FriendListItem;