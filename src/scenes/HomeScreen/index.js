import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ListItem
          key={0}
          title='Remove Expehkjhknse'
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
