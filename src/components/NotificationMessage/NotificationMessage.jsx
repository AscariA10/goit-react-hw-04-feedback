import PropTypes from 'prop-types';

import { Title } from './NotificationMessage.styled';

export const NotificationMessage = ({ notificationMessage }) => {
   return <Title>{notificationMessage}</Title>;
};

NotificationMessage.propTypes = {
   props: PropTypes.objectOf(PropTypes.string),
};
