import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const Container = styled.div``;

  const CosmeticSelect = styled.div`
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    color: ${COLORS.gray700};
    line-height: 1.2;
    padding: 12px 16px;
    position: relative;
    width: max-content;
    &:focus-within {
      outline: 2px solid blue;
    }
    &:hover {
      color: ${COLORS.black};
    }
  `;

  const DownArrow = styled(Icon)`
    display: inline-block;
    margin-left: 1rem;
    vertical-align: middle;
  `;

  const Label = styled.label`
    color: ${COLORS.gray700};
    display: block;
    margin-bottom: 0.5rem;
  `;

  const Select = styled.select`
    /** this bit I got help with from the solution video */
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;

  return (
    <>
      <Label htmlFor={label}>{label}</Label>
      <CosmeticSelect>
        <Select value={value} onChange={onChange}>
          {children}
        </Select>
        <Container>
          {displayedValue}
          <DownArrow id='chevron-down' strokeWidth={2} />
        </Container>
      </CosmeticSelect>
    </>
  );
};

export default Select;
