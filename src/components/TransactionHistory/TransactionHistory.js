import { TransactionTable, TableHead } from './TransactionHistory.styled'
import PropTypes from 'prop-types';
import {TransactionItem} from '../TransactionItem/TransactionItem'

export const TransactionHistory = ({ items }) => {
    return (
      <TransactionTable>
        <TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </TransactionTable>
    );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};