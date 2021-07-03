import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const VARIANTS = {
  small: {
    '--fontSize': '14px',
    '--borderWidth': '1px',
  },
  large: {
    '--fontSize': '18px',
    '--borderWidth': '2px',
  },
};

const ICON_SIZES = {
  small: { size: 20, strokeWidth: 1 },
  large: { size: 24, strokeWidth: 2 },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = VARIANTS[size];
  const Input = styled.input`
    border: none;
    border-bottom: var(--borderWidth) solid ${COLORS.black};
    color: inherit;
    font-size: var(--fontSize);
    font-weight: 700;
    height: 100%;
    outline-offset: 2px;
    padding: 4px;
    padding-left: 32px;
    width: 100%;
    &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
    }
  `;

  const StyledIcon = styled(Icon)`
    bottom: 2px;
    color: inherit;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 2px;
  `;

  const Wrapper = styled.div`
    color: ${COLORS.gray700};
    position: relative;
    width: ${width}px;
    &:hover {
      color: ${COLORS.black};
    }
  `;

  return (
    <Wrapper style={style}>
      <VisuallyHidden>
        <label htmlFor='icon-input'>{label}</label>
      </VisuallyHidden>
      <StyledIcon
        id={icon}
        size={ICON_SIZES[size].size}
        strokeWidth={ICON_SIZES[size].strokeWidth}
      />
      <Input id='icon-input' placeholder={placeholder} />
    </Wrapper>
  );
};

export default IconInput;
