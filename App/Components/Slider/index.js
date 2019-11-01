import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Slider as CustomSlider } from 'react-native-elements';

class Slider extends Component {
  state = {
    value: 0
  };

  parseValue = (value) => {
    const newValue = Math.round(value * 100);
    return newValue;
  };

  render() {
    const { value } = this.state;
    return (
      <View style={{ width: '100%' }}>
        <CustomSlider
          value={value}
          onValueChange={stateValue => this.setState({ value: stateValue })}
          {...this.props}
        />
        <Text>
          Value:
          {this.parseValue(value)}
          %
        </Text>
      </View>
    );
  }
}

export default Slider;
