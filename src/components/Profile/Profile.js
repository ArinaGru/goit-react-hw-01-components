import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  User,
  UserAvatar,
  UserName,
  UserText,
  StatsList,
  StatsItem,
  StatsText,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrapper>
      <User>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserText>@{tag}</UserText>
        <UserText>{location}</UserText>
      </User>
      <StatsList>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes</StatsText>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
