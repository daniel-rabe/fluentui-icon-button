import * as React from 'react';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { useTagPickerButton_unstable } from './useTagPickerButton';
import { renderTagPickerButton_unstable } from './renderTagPickerButton';
import { useTagPickerButtonStyles_unstable } from './useTagPickerButtonStyles.styles';
import type { TagPickerButtonProps } from './TagPickerButton.types';

/**
 * PickerButton component - TODO: add more docs
 */
export const TagPickerButton: ForwardRefComponent<TagPickerButtonProps> = React.forwardRef((props, ref) => {
  const state = useTagPickerButton_unstable(props, ref);

  useTagPickerButtonStyles_unstable(state);
  return renderTagPickerButton_unstable(state);
});

TagPickerButton.displayName = 'TagPickerButton';
