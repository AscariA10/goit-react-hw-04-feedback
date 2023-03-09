import { FormButtonList, Button } from './ButtonList.styled';
import PropTypes from 'prop-types';

export const ButtonList = ({ incrementValue, refValues }) => {
   return (
      <FormButtonList>
         <li>
            <Button
               onClick={() => {
                  incrementValue('good');
                  // countTotalFeedback();
               }}
            >
               Good
            </Button>
         </li>
         <li>
            <Button
               onClick={() => {
                  incrementValue('neutral');
                  // countTotalFeedback();
               }}
            >
               Neutral
            </Button>
         </li>
         <li>
            <Button
               onClick={() => {
                  incrementValue('bad');
                  // countTotalFeedback();
               }}
            >
               Bad
            </Button>
         </li>
      </FormButtonList>
   );
};

// ButtonList.propTypes = {
//    incrementValue: PropTypes.func.isRequired,
//    refValues: PropTypes.objectOf(PropTypes.string.isRequired),
// };
