import { createStackNavigator } from 'react-navigation';

import HomeScreen from '.src/scenes/HomeScreen';
import AddExpense from './src/scenes/AddExpense';
import RemoveExpense from './src/scenes/RemoveExpense';

export const Routes = createStackNavigator(
  {
    Home: HomeScreen,
    RemoveExpense: RemoveExpense,
    AddExpense: AddExpense
  },
  {
    initialRouteName: 'Home',
  }
);
