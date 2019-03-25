import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import AddExpense from './src/scenes/AddExpense';
import Progress from './src/scenes/Progress';
import CreateGoals from './src/scenes/CreateGoals';

import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

import {SpendingChart} from './src/scenes/HomeScreen/components/SpendingChart'

// TODO: move homescreen into its own component
class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ListItem
          key={0}
          title='Add Expense'
          leftIcon={{name: 'add'}}
          topDivider={true}
          bottomDivider={true}
          onPress={() => this.props.navigation.navigate('AddExpense')}
        />
        <ListItem
          key={1}
          title='See Progress'
          leftIcon={{name: 'assignment'}}
          topDivider={true}
          onPress={() => this.props.navigation.navigate('Progress')}
        />
        <ListItem
          key={2}
          title='Set Goals'
          leftIcon={{name: 'library-add'}}
          topDivider={true}
          onPress={() => this.props.navigation.navigate('CreateGoals')}
        />

        <SpendingChart />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeButton: {
    width: '100%',
    backgroundColor: '#aaa',
    color: '#000000'
  },
});

// TODO: move routes into its own thang
const Routes = createStackNavigator(
  {
    Home: HomeScreen,
    CreateGoals: CreateGoals,
    Progress: Progress,
    AddExpense: AddExpense
  },
  {
    initialRouteName: 'Home',
  }
);

const BudgetApp = createAppContainer(Routes);

export default class App extends React.Component {
  render() {
    return <BudgetApp />;
  }
}
