import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import Datastore from 'react-native-local-mongodb';
import { Button, Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import RevealAddition from './../../components/RevealAddition';

import { addExpense } from './../../services/ExpensesDB'
import { categoryPlaceholder } from './../../services/CategoryDB'


// TODO: get this from the server
const defaultCategories = [
  {label: 'Subscriptions', value: 'subscription'},
  {label: 'Rent', value: 'rent'},
  {label: 'Traveling', value: 'travel'},
  {label: 'Groceries', value: 'grocery'},
  {label: 'Pet Purchases', value: 'pet'},
  {label: 'Online Shopping', value: 'online_shopping'},
  {label: 'Misc', value: 'misc'},
]

export default class AddExpense extends React.Component {
  state = {category: '', price: 0, purchaseName: null, showAddition: true}
  updateCategory = (category) => {
    this.setState({ category: category })
  }
  updatePrice = (price) => {
    this.setState({ price: price.replace(/[^0-9\.]/g, '') })
  }
  updateName = (purchaseName) => {
    this.setState({ purchaseName: purchaseName })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RNPickerSelect
          placeholder={categoryPlaceholder}
          items={defaultCategories}
          onValueChange={this.updateCategory}
          style={{...styles}}
          value={this.state.category}
        />
        <TextInput
          keyboardType="numeric"
          blurOnSubmit={false}
          onChangeText = {(text) => this.updatePrice(text)}
          value={`${this.state.price}`}
          style={styles.inputs}
          placeholder='How Much?'
        />
        <TextInput
          blurOnSubmit={false}
          style={styles.inputs}
          onChangeText = {(text) => this.updateName(text)}
          placeholder='Name it (Optional)'
        />

        <Button
          title="Add Expense"
          style={styles.button}
          onPress={ () => addExpense(this.state.category, parseFloat(this.state.price), this.state.purchaseName) }
        />

        {this.state.showAddition &&
          <RevealAddition/> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'gray',
    color: 'black',
    marginHorizontal: 16,
    marginBottom: 16
  },
  inputs: {
    fontSize: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'gray',
    color: 'black',
    marginHorizontal: 16,
    marginBottom: 16
  },
  button: {
    borderRadius: 0,
    margin: 16
  }
});
