import React from 'react';
import PropTypes from "prop-types";
import '../../index.css';

const Statistics = (({ title, stats }) => (
	
	<section class="statistics">
		{title && <h2  class="title">{title}</h2>}
		<ul class="stat-list">
			{stats.map(({ id, label, percentage }) => (
				
				<li class="item" key={id}>
					<span class="label">{label}</span>
					<span class="percentage">{percentage}%</span>
				</li>
				
			
			))}
		</ul>
	</section>
));

Statistics.defaultProps = {
  title: "",
  stats: [],
};

Statistics.propTypes = {
	title: PropTypes.string.isRequired,
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
  			percentage: PropTypes.number.isRequired
    })
  ).isRequired,
  
};

export default Statistics;
