import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import AddExpense from './src/scenes/AddExpense';
import RemoveExpense from './src/scenes/RemoveExpense';

import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ListItem
          key={0}
          title='Remove Expense'
          leftIcon={{name: 'flight-takeoff'}}
          topDivider={true}
          onPress={() => this.props.navigation.navigate('RemoveExpense')}
        />
        <ListItem
          key={1}
          title='Add Expense'
          leftIcon={{name: 'ios-american-football'}}
          topDivider={true}
          bottomDivider={true}
          onPress={() => this.props.navigation.navigate('AddExpense')}
        />
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

const Routes = createStackNavigator(
  {
    Home: HomeScreen,
    RemoveExpense: RemoveExpense,
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
