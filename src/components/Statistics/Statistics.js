import PropTypes from 'prop-types';

import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import {StatisticsWrapper, StatisticTitle, StatisticsList} from './Statistics.styled';

export const Statistic = ({ stats, title }) => {
    return (
      <StatisticsWrapper>
            {title ? <StatisticTitle>{title}</StatisticTitle> : null}
            <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
      </StatisticsWrapper>
    );};

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired
    })),
};
