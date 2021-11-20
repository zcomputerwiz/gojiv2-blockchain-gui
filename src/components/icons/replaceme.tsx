import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as gojiIcon } from './images/goji.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={gojiIcon} viewBox="0 0 150 58" {...props} />;
}
