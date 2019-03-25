import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ListItem
          key={1}
          title='Add Expense'
          leftIcon={{name: 'add'}}
          bottomDivider={true}
          onPress={() => this.props.navigation.navigate('AddExpense')}
        />
        <ListItem
          key={0}
          title='See Progress'
          leftIcon={{name: 'assignment'}}
          bottomDivider={true}
          onPress={() => this.props.navigation.navigate('Progress')}
        />
        <ListItem
          key={0}
          title='Set Goals'
          leftIcon={{name: 'library-add'}}
          onPress={() => this.props.navigation.navigate('CreateGoals')}
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
