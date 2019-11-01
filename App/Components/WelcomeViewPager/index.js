import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {
  IndicatorViewPager,
  PagerDotIndicator
} from 'rn-viewpager';

import Slider from '../Slider';
import Overlay from '../Overlay';

import { Images } from '../../Themes';

import styles from './styles';

export default class ViewPagerPage extends Component {
  renderDotIndicator = () => <PagerDotIndicator pageCount={3} />;

  render() {
    return (
      <IndicatorViewPager style={{ flex: 1 }} indicator={this.renderDotIndicator()}>
        <View style={styles.container}>
          <Image source={Images.firstslide} />
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 24 }}>No matter wherever and whenever you find time,</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Slider />
          <Slider step={0.2} maximumValue={1} />
        </View>
        <View style={styles.container}>
          <Overlay />
          <Overlay fullScreen overlayBackgroundColor="lightblue" />
        </View>
      </IndicatorViewPager>
    );
  }
}
