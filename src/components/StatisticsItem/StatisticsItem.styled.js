import styled from 'styled-components';

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  border: 1px solid grey;
  box-shadow: 2px 8px 11px -2px rgba(0, 0, 0, 0.75);
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`;

export const Label = styled.span`
  font-size: 12px;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: white;
`;
