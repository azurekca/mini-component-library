/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  smallBorder: 4,
  largeBorder: 8,
  threshold: 98,
  max: 100,
};

const VARIANTS = {
  small: {
    '--borderRadius': '4px',
    '--height': '8px',
    '--padding': '0',
  },
  medium: {
    '--borderRadius': '4px',
    '--height': '12px',
    '--padding': '0',
  },
  large: {
    '--borderRadius': '8px',
    '--height': '24px',
    '--padding': '4px',
  },
};

function calcRounding(value) {
  const delta = SIZES.max - SIZES.threshold;
  return value > SIZES.threshold
    ? ((SIZES.threshold - value) / -delta) * SIZES.smallBorder + 'px'
    : '0';
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  padding: var(--padding);
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-top-left-radius: ${SIZES.smallBorder + 'px'};
  border-bottom-left-radius: ${SIZES.smallBorder + 'px'};
  border-top-right-radius: ${props => calcRounding(props.value)};
  border-bottom-right-radius: ${props => calcRounding(props.value)};
  height: 100%;
  width: ${props => props.value}%;
`;

const ProgressBar = ({ value, size }) => {
  const style = VARIANTS[size];
  return (
    <Wrapper style={style}>
      <Bar
        value={value}
        role='progressbar'
        aria-valuenow={value}
        aria-valuemin='0'
        aria-valuemax='100'>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Bar>
    </Wrapper>
  );
};

export default ProgressBar;
