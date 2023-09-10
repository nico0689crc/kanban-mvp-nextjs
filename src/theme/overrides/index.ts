import merge from 'lodash/merge';
import { Theme } from '@mui/material/styles';
import { defaultProps } from './default-props';

export function componentsOverrides(theme: Theme) {
  const components = merge(
    defaultProps(theme)
  );

  return components;
}