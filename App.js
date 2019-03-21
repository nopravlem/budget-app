import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Button, ThemeProvider } from 'react-native-elements';

import AddExpense from './src/scenes/AddExpense';
import RemoveExpense from './src/scenes/RemoveExpense';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.homeButton} >Home Screen</Text>
        <Button
          title="Remove Expense"
          style={styles.homeButton}
          onPress={() => this.props.navigation.navigate('RemoveExpense')}
        />
        <Button
          title="Add Expense"
          style={styles.homeButton}
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

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    RemoveExpense: RemoveExpense,
    AddExpense: AddExpense
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
