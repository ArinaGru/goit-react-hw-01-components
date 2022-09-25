import styled from 'styled-components';

export const TableItem = styled.tr`
  text-align: center;
  :nth-child(odd) {
    background: white;
  }
  :nth-child(even) {
    background: skyBlue;
  }
`;
