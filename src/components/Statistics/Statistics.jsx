// import PropTypes from 'prop-types';

export const Statistics = ({ goodValue, neutralValue, badValue, totalFeedbacks, totalRate }) => {
   return (
      <>
         <p>StatisticsGrid</p>
         <ul>
            <li>Good: {goodValue}</li>
            <li>Neutral: {neutralValue}</li>
            <li>Bad: {badValue}</li>
         </ul>
         <p>Total: {totalFeedbacks} </p>
         <p>Positive feedback {!isNaN(totalRate) && totalRate >= 0 ? totalRate : 0}%</p>
      </>
   );
};

// export const Statistics = ({
//    statisticValues: { goodValue, neutralValue, badValue },
//    countTotalRate,
//    countTotalFeedback,
//    children,
// }) => {
//    const resultRate = countTotalRate();
//    const resultFeedback = countTotalFeedback();

//    return resultFeedback > 0 ? (
//       <>
// <p>StatisticsGrid</p>
// <ul>
//    <li>Good: {goodValue}</li>
//    <li>Neutral: {neutralValue}</li>
//    <li>Bad: {badValue}</li>
// </ul>
//          <p>Total: {resultFeedback} </p>
//          <p>Positive feedback {resultRate ? resultRate : 0}%</p>
//       </>
//    ) : (
//       children
//    );
// };

// Statistics.propTypes = {
//    statisticValues: PropTypes.objectOf(PropTypes.number),
//    countTotalRate: PropTypes.func,
//    countTotalFeedback: PropTypes.func,
//    children: PropTypes.object,
// };
