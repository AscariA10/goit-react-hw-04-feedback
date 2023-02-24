import { FormButtonList, Button } from './ButtonList.styled';
import PropTypes from 'prop-types';

export const ButtonList = ({ incrementValue, refValues }) => {
   return (
      <FormButtonList>
         <li>
            <Button
               onClick={() => {
                  incrementValue(refValues.GOOD_VALUE);
                  // countTotalFeedback();
               }}
            >
               Good
            </Button>
         </li>
         <li>
            <Button
               onClick={() => {
                  incrementValue(refValues.NEUTRAL_VALUE);
                  // countTotalFeedback();
               }}
            >
               Neutral
            </Button>
         </li>
         <li>
            <Button
               onClick={() => {
                  incrementValue(refValues.BAD_VALUE);
                  // countTotalFeedback();
               }}
            >
               Bad
            </Button>
         </li>
      </FormButtonList>
   );
};

ButtonList.propTypes = {
   incrementValue: PropTypes.func.isRequired,
   refValues: PropTypes.objectOf(PropTypes.string.isRequired),
};
