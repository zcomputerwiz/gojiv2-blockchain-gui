import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { goji } from '@goji/icons';

const StyledGoji = styled(goji)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledGoji />
    </Box>
  );
}
