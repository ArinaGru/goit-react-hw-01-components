import {
  ListItem,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './Friend.styled';
import PropTypes from 'prop-types';
import { IoIosDisc } from 'react-icons/io';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <FriendStatus selected={isOnline}>
        <IoIosDisc size={24} />
      </FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </ListItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};