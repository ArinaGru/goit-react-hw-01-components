import PropTypes from 'prop-types';

import { Friend } from '../Friend/Friend'
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
      <FriendsList>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <Friend key={id} isOnline={isOnline} name={name} avatar={avatar}/>
        ))}
      </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
