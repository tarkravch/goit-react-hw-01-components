import React from 'react';
import PropTypes from "prop-types";
import '../../index.css';
import styleStatistics from '../statistics/Statistics.module.css';

const Statistics = (({ title, stats }) => (
	
	<section className={styleStatistics.statistics}>
		{title && <h2  className={styleStatistics.title}>{title}</h2>}
		<ul className={styleStatistics.statlist}>
			{stats.map(({ id, label, percentage }) => (
				
				<li className={styleStatistics.item} key={id}>
					<span className={styleStatistics.label}>{label}</span>
					<span className={styleStatistics.percentage}>{percentage}%</span>
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
