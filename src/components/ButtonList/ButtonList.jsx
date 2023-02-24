import { FormButtonList, Button } from './ButtonList.styled';

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
