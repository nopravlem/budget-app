import React from 'react';
import { createAppContainer } from 'react-navigation';
import Routes from './src/routes.js'

const BudgetApp = createAppContainer(Routes);

export default class App extends React.Component {
  render() {
    return <BudgetApp />;
  }
}
