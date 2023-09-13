import merge from 'lodash/merge';
import { Theme } from '@mui/material/styles';
import { defaultProps } from './default-props';
import { textField } from './components/text-field';

export function componentsOverrides(theme: Theme) {
  const components = merge(
    defaultProps(theme),
    textField(theme)
  );

  return components;
}