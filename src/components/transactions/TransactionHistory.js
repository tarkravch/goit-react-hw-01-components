import React from 'react';
import PropTypes from "prop-types";
import '../../index.css';
import transactionStyle from '../transactions/Transaction.module.css';


const TransactionHistory = (({ items }) => (

	
<table className={transactionStyle.transaction_history}>
  <thead className={transactionStyle.head}>
    <tr className={transactionStyle.headrow}>
      <th className={transactionStyle.column}>Type</th>
      <th className={transactionStyle.column}>Amount</th>
      <th className={transactionStyle.column}>Currency</th>
    </tr>
  </thead>

	<tbody className={transactionStyle.tbody}>
			{items.map(({ id, type, amount, currency }) => (
			<tr className={transactionStyle.row} key={id}>
	     		<td className={transactionStyle.value}>{type}</td>
      		<td className={transactionStyle.value}>{parseFloat(amount).toFixed(2)}</td>
      		<td className={transactionStyle.value}>{currency}</td>
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