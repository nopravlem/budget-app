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

// TODO: move all mongodb stuff into a service
const db = new Datastore({ filename: 'expenses', autoload: true, timestampData: false });
const categoryDB = new Datastore({ filename: 'category', autoload: true });

const addExpense = (category, amount, name) => {
  let new_expense = {
    category: category,
    amount: amount,
    name: name || 'Random Expense'
  }
  db.insert(new_expense);
  // db.remove({}, {multi: true});
  db.find({}, function (err, allDocs) {
    console.log(allDocs);
  });

  // this.setState({showAddtion: true}) might need to do this through redux
}

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

const placeholder = {
  label: 'Select a category...',
  value: null
}

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
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {this.state.showAddition &&
          <RevealAddition/> }

        <RNPickerSelect
          placeholder={placeholder}
          items={defaultCategories}
          onValueChange={this.updateCategory}
          style={styles.picker}
          value={this.state.category}
        />
        <TextInput
          blurOnSubmit={false}
          onChangeText = {(text) => this.updatePrice(text)}
          value={this.state.price}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30
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
