import React from 'react';
import PropTypes from "prop-types";
import '../../index.css';
import FriendListItem from './FriendListItem';
import defaultImage from "../../components/default.jpg";

const FriendList = (({ friends }) => (
	
	<ul class="friend-list">
		{friends.map(({ avatar, name, isOnline, id }) => (
			<li key={id}>
				<FriendListItem
					avatar={avatar}
					name={name}
					isOnline={isOnline}
				/>
			</li>
	
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