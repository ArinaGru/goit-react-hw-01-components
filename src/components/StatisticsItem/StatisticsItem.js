import PropTypes from 'prop-types';
import { StatisticItem, Label, Percentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatisticItem style={{ backgroundColor: getRandomColor(percentage) }}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatisticItem>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomColor(percentage) {
  if (percentage > 30) {
    return 'turquoise';
  } else if (percentage > 10) {
    return 'blue';
  }
  return 'purple';
}
