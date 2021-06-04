import React from 'react';
import PropTypes from "prop-types";
import '../../index.css';


const TransactionHistory = (({ items }) => (

	
	<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

	<tbody>
			{items.map(({ id, type, amount, currency }) => (
			<tr key={id}>
	     		<td>{type}</td>
      		<td>{amount}</td>
      		<td>{currency}</td>
	  		</tr>
    ))}
  </tbody>
</table>
));

/* TransactionHistory.defaultProps = {
	avatar: defaultImage,
}; */

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string.isRequired,
			amount: PropTypes.number.isRequired,
			currency: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired
		})).isRequired
	
  
};

export default TransactionHistory;