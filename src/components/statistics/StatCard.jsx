import React from 'react';
import PropTypes from "prop-types";


const StatCard = ({ id, label, percentage }) => (
	<li class="item" key={id}>
		<span class="label">{label}</span>
		<span class="percentage">{percentage}</span>
	</li>
);

StatCard.propTypes = {
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
  			percentage: PropTypes.number.isRequired
};

export default StatCard;