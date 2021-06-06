import React from 'react';
import PropTypes from "prop-types";
import '../../index.css';
import FriendListItem from './FriendListItem';
import defaultImage from "../../components/default.jpg";
import friendsStyles from "../friends/Friends.module.css";

const FriendList = (({ friends }) => (
	
	<ul className={friendsStyles.friend__list}>
		{friends.map(({ avatar, name, isOnline, id }) => (
			
			<FriendListItem
				key={id}
				avatar={avatar}
				name={name}
				isOnline={isOnline}
				id={id}
				/>
			
	
		))}
</ul>
));

FriendList.defaultProps = {
	avatar: defaultImage,
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired
		})).isRequired
};

export default FriendList;