import { FeedbackForm, FeedbackTitle } from './Title.styled';
import PropTypes from 'prop-types';

export const Title = ({ children, title }) => {
   return (
      <FeedbackForm>
         <FeedbackTitle>{title}</FeedbackTitle>
         <div>{children}</div>
      </FeedbackForm>
   );
};

// Title.propTypes = {
//    children: PropTypes.array.isRequired,
//    title: PropTypes.string.isRequired,
// };
