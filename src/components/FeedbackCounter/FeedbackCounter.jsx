import React, { Component } from 'react';
import { Title } from '../Title/Title';
import { ButtonList } from '../ButtonList/ButtonList';
import { Statistics } from '../Statistics/Statistics';

export class FeedbackCounter extends Component {
   render() {
      return (
         <>
            <Title />
            <ButtonList />
            <Statistics />
         </>
      );
   }
}
