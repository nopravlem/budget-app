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

// TODO: move all mongodb stuff into a service
const db = new Datastore({ filename: 'expenses', autoload: true, timestampData: true });
const categoryDB = new Datastore({ filename: 'category', autoload: true });

const addExpense = (category, amount, name='Random Expense') => {
  let new_expense = {
    category: category,
    amount: amount,
    name: name
  }
  db.insert(new_expense);
  // db.remove({}, {multi: true});
  db.find({}, function (err, allDocs) {
    console.log(allDocs);
  });
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
  state = {category: '', price: 0}
  updateCategory = (category) => {
    this.setState({ category: category })
  }
  updatePrice = (price) => {
    this.setState({ price: price.replace(/[^0-9\.]/g, '') })
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
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
        />
        <TextInput
          blurOnSubmit={false}
          style={styles.inputs}
        />
        <Button
          title="Add Expense"
          style={styles.button}
          onPress={ () => addExpense(this.state.category, parseFloat(this.state.price)) }
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
    margin: '0 16pt 16pt'
  },
  button: {
    borderRadius: 0,
    margin: 16
  }
});
