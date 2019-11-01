import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Overlay as CustomOverlay } from 'react-native-elements';

class Overlay extends Component {
  state = {
    isVisible: false
  };

  render() {
    const { isVisible } = this.state;
    return (
      <View>
        <Text
          onPress={() => {
            this.setState(state => ({ isVisible: !state.isVisible }));
          }}
        >
          toggle overlay component
        </Text>

        <CustomOverlay
          isVisible={isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          {...this.props}
        >
          <View style={{ paddingTop: this.props.fullScreen ? 60 : 0 }}>
            <Text>Hello from Overlay!</Text>
            <Text
              onPress={() => {
                this.setState(state => ({ isVisible: !state.isVisible }));
              }}
            >
              toggle fullScreen overlay component
            </Text>
          </View>
        </CustomOverlay>
      </View>
    );
  }
}

export default Overlay;
