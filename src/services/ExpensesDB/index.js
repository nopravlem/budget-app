import Datastore from 'react-native-local-mongodb';

const db = new Datastore({ filename: 'expenses', autoload: true, timestampData: false });

export const addExpense = (category, amount, name) => {
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

export const categoryDivideData = () => {
  db.find({}, function (err, allDocs) {
    return allDocs;
  });
}
