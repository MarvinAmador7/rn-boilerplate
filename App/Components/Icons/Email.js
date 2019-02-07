import React from 'react';
import { string } from 'prop-types';

import Svg, { Path } from 'react-native-svg';

function Email({ color, ...allProps }) {
  return (
    <Svg width={16} height={12} {...allProps}>
      <Path
        d="M16 12H0V.656l5.458 4.688-2.833 3.61.083.093L6 5.766 8 7.5l2-1.734 3.292 3.28.083-.093-2.833-3.61L16 .657V12zm-.333-12L8 6.563.333 0h15.334z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
}

Email.propTypes = {
  color: string,
};

Email.defaultProps = {
  color: '#282C37',
};

export default Email;
