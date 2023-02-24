import React, { Component } from 'react';

import { Title } from './Title/Title';
import { ButtonList } from './ButtonList/ButtonList';
import { Statistics } from './Statistics/Statistics';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

export class App extends Component {
   refValues = {
      GOOD_VALUE: 'goodValue',
      NEUTRAL_VALUE: 'neutralValue',
      BAD_VALUE: 'badValue',
   };

   state = {
      [this.refValues.GOOD_VALUE]: 0,
      [this.refValues.NEUTRAL_VALUE]: 0,
      [this.refValues.BAD_VALUE]: 0,
   };

   title = 'Expresso Cafe Feedback and Rate List';
   notificationMessage = 'There is no feedback';

   incrementValue = takenValue => {
      this.setState(prevState => {
         return { [takenValue]: prevState[takenValue] + 1 };
      });
   };

   countTotalFeedback = () => {
      const { goodValue, badValue, neutralValue } = this.state;
      const result = goodValue + badValue + neutralValue;
      return result;
   };

   countTotalRate = () => {
      const { goodValue, badValue, neutralValue } = this.state;
      const result = (
         ((goodValue * 1 + neutralValue * 0.5 + badValue * -1) /
            (goodValue + badValue + neutralValue)) *
         100
      ).toFixed(1);
      if (result <= 0 || isNaN(result)) {
         return 0;
      }
      return result;
   };

   render() {
      return (
         <Title title={this.title}>
            <ButtonList incrementValue={this.incrementValue} refValues={this.refValues} />
            <Statistics
               statisticValues={this.state}
               countTotalRate={this.countTotalRate}
               countTotalFeedback={this.countTotalFeedback}
            >
               <NotificationMessage notificationMessage={this.notificationMessage} />
            </Statistics>
         </Title>
      );
   }
}
