import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 250px;
  padding-top: 40px;
  border: 1px solid #d8d8d8;
`;

export const User = styled.div`
  padding-bottom: 20px;
`;

export const UserAvatar = styled.img`
  display: block;
  width: 50%;
  border-radius: 50%;
  margin: 0 auto 30px;
`;

export const UserName = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const UserText = styled.p`
  text-align: center;
  font-size: 18px;
`;

export const StatsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  border: 1px solid grey;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  background-color: #f2f2f2;
  box-shadow: 2px 8px 11px -2px rgba(0, 0, 0, 0.75);
`;

export const StatsText = styled.span`
  font-size: 16px;
`;

export const StatsQuantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
