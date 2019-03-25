import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

export default class Dropdown extends React.Component {
  state = {pickedValue: ''}
  updatePickedValue = (pickedValue) => {
    this.setState({ pickedValue: pickedValue })
  }

  render() {
    return (
      <RNPickerSelect
        placeholder={this.props.placeholder}
        items={this.props.dropdownValues}
        onValueChange={this.updatePickedValue}
        style={styles.picker}
        value={this.state.pickedValue}
      />
    );
  }
}

const placeholder = {
  something: 'should go here as backup'
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
});
