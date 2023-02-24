import { FeedbackForm, FeedbackTitle } from './Title.styled';

export const Title = ({ children, title }) => {
   return (
      <FeedbackForm>
         <FeedbackTitle>{title}</FeedbackTitle>
         <div>{children}</div>
      </FeedbackForm>
   );
};
