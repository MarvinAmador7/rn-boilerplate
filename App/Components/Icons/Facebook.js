import React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

const Facebook = props => (
  <Svg width={38} height={38} {...props}>
    <G fill="none" fillRule="evenodd">
      <Rect fill="#FFF" width={38} height={38} rx={2} />
      <Path
        d="M20.353 19.004V27H17.14v-7.996H15v-2.76h2.141v-1.625c0-2.248.651-3.619 3.486-3.619h2.359v2.76H21.51c-1.1 0-1.157.386-1.157 1.108v1.382H23l-.318 2.751-2.33.003z"
        fill="#3B5998"
      />
    </G>
  </Svg>
);

export default Facebook;
