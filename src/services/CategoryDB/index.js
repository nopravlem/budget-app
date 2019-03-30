import Datastore from 'react-native-local-mongodb';

const categoryDB = new Datastore({ filename: 'category', autoload: true });

const defaultCategories = [
  {label: 'Subscriptions', value: 'subscription'},
  {label: 'Rent', value: 'rent'},
  {label: 'Traveling', value: 'travel'},
  {label: 'Groceries', value: 'grocery'},
  {label: 'Pet Purchases', value: 'pet'},
  {label: 'Online Shopping', value: 'online_shopping'},
  {label: 'Misc', value: 'misc'},
]

export const categoryPlaceholder = {
  label: 'Select a category...',
  value: null
}
