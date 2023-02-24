export const Statistics = ({
   statisticValues: { goodValue, neutralValue, badValue },
   countTotalRate,
   countTotalFeedback,
   children,
}) => {
   const resultRate = countTotalRate();
   const resultFeedback = countTotalFeedback();

   return resultFeedback > 0 ? (
      <>
         <p>StatisticsGrid</p>
         <ul>
            <li>Good: {goodValue}</li>
            <li>Neutral: {neutralValue}</li>
            <li>Bad: {badValue}</li>
         </ul>
         <p>Total: {resultFeedback} </p>
         <p>Positive feedback {resultRate ? resultRate : 0}%</p>
      </>
   ) : (
      children
   );
};
