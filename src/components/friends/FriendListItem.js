import React from 'react';
import PropTypes from "prop-types";
import '../../index.css';
import defaultImage from "../../components/default.jpg";
import friendsStyles from "../friends/Friends.module.css";


const FriendListItem = (({ avatar, name, isOnline, id }) => (
	
	<li className={friendsStyles.item} key={id}>
		{isOnline === true ? (
			<span className={friendsStyles.status__online}>{isOnline}</span>
		) : (
			<span className={friendsStyles.status__offline}>{isOnline}</span>
		)}
		
  		<img className={friendsStyles.avatar} src={avatar} alt={name} width="48" />
		<p className={friendsStyles.name}>{name}</p>
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